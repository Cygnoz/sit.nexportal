const Region = require("../database/model/region");
const Area = require("../database/model/area");
const Leads = require("../database/model/leads");
const User = require("../database/model/user");
const mongoose = require("mongoose");
const RegionManager = require("../database/model/regionManager");
const AreaManager = require("../database/model/areaManager");
const Bda = require("../database/model/bda");
const Supervisor = require("../database/model/supervisor");
const SupportAgent = require("../database/model/supportAgent");
const moment = require("moment");

exports.addRegion = async (req, res, next) => {
  try {
    const { regionName, country, description } = req.body;

    // Validate the required fields
    if (!regionName || !country) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided" });
    }
    // Count existing organizations to generate the next organizationId
    let nextId = 1;
    const lastRegion = await Region.findOne().sort({ _id: -1 }); // Sort by creation date to find the last one
    if (lastRegion) {
      const lastId = parseInt(lastRegion.regionCode.slice(4)); // Extract the numeric part from the customerID
      nextId = lastId + 1; // Increment the last numeric part
    }
    const regionCode = `REG-${nextId.toString().padStart(4, "0")}`;
    const status = "Active";

    // Check if the regionCode already exists
    const existingRegion = await Region.findOne({
      $or: [{ regionName }],
    });
    if (existingRegion) {
      return res.status(400).json({ message: "Region name already exists" });
    }
    // Create a new region entry
    const newRegion = new Region({
      regionCode,
      regionName,
      country,
      description,
      status,
    });

    await newRegion.save();
    res
      .status(201)
      .json({ message: "Region added successfully", region: newRegion });

    // Pass operation details to middleware
    ActivityLog(req, "successfully", newRegion._id);
    next();
  } catch (error) {
    console.error("Error adding region:", error);
    res.status(500).json({ message: "Internal server error" });
    ActivityLog(req, "Failed");
    next();
  }
};

exports.getRegion = async (req, res) => {
  try {
    const { regionId } = req.params;

    const region = await Region.findById(regionId);
    if (!region) {
      return res.status(404).json({ message: "Region not found" });
    }

    res.status(200).json(region);
  } catch (error) {
    console.error("Error fetching region:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllRegions = async (req, res) => {
  try {
    const regions = await Region.find();

    if (regions.length === 0) {
      return res.status(404).json({ message: "No regions found" });
    }

    res
      .status(200)
      .json({ message: "Regions retrieved successfully", regions });
  } catch (error) {
    console.error("Error fetching all regions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateRegion = async (req, res, next) => {
  try {
    const { regionId } = req.params;
    const { regionCode, regionName, country, description } = req.body;

    const existingRegion = await Region.findOne({
      $or: [{ regionCode }, { regionName }],
      _id: { $ne: regionId },
    });

    if (existingRegion) {
      let message = "Conflict: ";
      if (existingRegion.regionCode === regionCode)
        message += "regionCode already exists. ";
      if (existingRegion.regionName === regionName)
        message += "regionName already exists. ";
      return res.status(400).json({ message: message.trim() });
    }

    const updatedRegion = await Region.findByIdAndUpdate(
      regionId,
      { regionCode, regionName, country, description },
      { new: true }
    );

    if (!updatedRegion) {
      return res.status(404).json({ message: "Region not found" });
    }

    res
      .status(200)
      .json({ message: "Region updated successfully", region: updatedRegion });

    // Pass operation details to middleware
    ActivityLog(req, "successfully", updatedRegion._id);
    next();
  } catch (error) {
    console.error("Error updating region:", error);
    res.status(500).json({ message: "Internal server error" });
    ActivityLog(req, "Failed");
    next();
  }
};

exports.deleteRegion = async (req, res) => {
  try {
    const { regionId } = req.params;

    // Validate if regionId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(regionId)) {
      return res.status(400).json({ message: "Invalid Region ID." });
    }

    // Check if the region exists
    const region = await Region.findById(regionId);
    if (!region) {
      return res.status(404).json({ message: "Region not found." });
    }

    // Check if regionId is referenced in Leads or Area collections
    const [
      lead,
      area,
      regionManager,
      areaManager,
      bda,
      supervisor,
      supportAgent,
    ] = await Promise.all([
      Leads.findOne({ regionId }),
      Area.findOne({ region }),
      RegionManager.findOne({ region }),
      AreaManager.findOne({ region }),
      Bda.findOne({ region }),
      Supervisor.findOne({ region }),
      SupportAgent.findOne({ region }),
    ]);

    if (
      lead ||
      area ||
      regionManager ||
      areaManager ||
      bda ||
      supervisor ||
      supportAgent
    ) {
      return res.status(400).json({
        message:
          "Cannot delete Region because it is referenced in another collection.",
        referencedIn: {
          leads: !!lead,
          area: !!area,
          regionManager: !!regionManager,
          areaManager: !!areaManager,
          bda: !!bda,
          supervisor: !!supervisor,
          supportAgent: !!supportAgent,
        },
      });
    }

    // Delete the region
    const deletedRegion = await Region.findByIdAndDelete(regionId);
    if (!deletedRegion) {
      return res.status(404).json({ message: "Region not found." });
    }

    // Log successful operation
    ActivityLog(req, "successfully", deletedRegion._id);
    next();

    res.status(200).json({ message: "Region deleted successfully." });
  } catch (error) {
    console.error("Error deleting Region:", error.message || error);

    // Log error as failure
    ActivityLog(req, "Failed");
    next();

    res.status(500).json({ message: "Internal server error." });
  }
};


exports.getAreasByRegion = async (req, res) => {
  try {
    const { id: regionId } = req.params;

    // Check if the region exists
    const regionExists = await Region.findById(regionId);
    if (!regionExists) {
      return res.status(404).json({ message: "Region not found" });
    }

    // Find areas associated with the given region
    const areas = await Area.find({ region: regionId });

    if (areas.length === 0) {
      return res
        .status(404)
        .json({ message: "No areas found for the given region" });
    }

    // Transform areas to include areaCode, areaName, and userName
    const transformedAreas = await Promise.all(
      areas.map(async (area) => {
        const areaManager = await AreaManager.findOne({ area: area._id });
        let userName = null;

        if (areaManager && areaManager.user) {
          const user = await User.findById(areaManager.user, { userName: 1 });
          if (user) {
            userName = user.userName;
          }
        }

        return {
          areaCode: area.areaCode,
          areaName: area.areaName,
          userName,
        };
      })
    );

    // Count AreaManagers associated with the given region
    const totalAreaManagers = await AreaManager.countDocuments({
      region: regionId,
    });

    // Count BDAs associated with the given region
    const totalBdas = await Bda.countDocuments({
      region: regionId,
    });

    // Count Licensors in the Leads collection
    const totalLicensors = await Leads.countDocuments({
      customerStatus: "Licenser",
      regionId: regionId,
    });

    // Fetch Licensers with specified fields
    const licensers = await Leads.find(
      { customerStatus: "Licenser", regionId },
      { customerId: 1, firstName: 1, trialStatus: 1 }
    );

    // Get the current month's start and end dates
    const startOfMonth = moment().startOf("month").toDate();
    const endOfMonth = moment().endOf("month").toDate();

    // Count Leads for the current month
    const totalLeadThisMonth = await Leads.countDocuments({
      customerStatus: "Lead",
      regionId: regionId,
      createdAt: { $gte: startOfMonth, $lte: endOfMonth },
    });

    // Fetch the Region Manager details
    const regionManagerData = await RegionManager.findOne({ region: regionId });
    let regionManager = null;

    if (regionManagerData) {
      const user = await User.findById(regionManagerData.user, {
        userName: 1,
        email: 1,
        phoneNo: 1,
        userImage: 1,
      });

      if (user) {
        regionManager = {
          userName: user.userName,
          email: user.email,
          phoneNo: user.phoneNo,
          userImage: user.userImage,
        };
      }
    }

    res.status(200).json({
      areas: transformedAreas,
      licensers,
      totalAreaManagers,
      totalBdas,
      totalLicensors,
      totalLeadThisMonth,
      regionManager,
    });
  } catch (error) {
    console.error("Error fetching areas by region:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



exports.getRegionDetails = async (req, res) => {
  try {
    const { id: regionId } = req.params;

    // Check if the region exists
    const regionExists = await Region.findById(regionId);
    if (!regionExists) {
      return res.status(404).json({ message: "Region not found" });
    }

    // Fetch data and counts from collections, populating `user` reference fields
    const [areaManagers, bdas, regionManagers, supervisors, supportAgents] =
      await Promise.all([
        AreaManager.find({ region: regionId })
          .select("user area") // Include only `user` and `area` fields from the AreaManager collection
          .populate({
            path: "user",
            select: "userName email userImage phoneNo", // Select only the specified fields from User
          })
          .populate({
            path: "area",
            select: "areaName", // Replace 'name' and 'location' with the specific fields you want from the Area model
          }),
        Bda.find({ region: regionId })
          .select("user area") // Include only `user` and `area` fields from the Bda collection
          .populate({
            path: "user",
            select: "employeeId userName email userImage phoneNo", // Select only the specified fields from User
          })
          .populate({
            path: "area",
            select: "areaName", // Replace 'name' and 'location' with the specific fields you want from the Area model
          }),
        RegionManager.find({ region: regionId }).populate({
          path: "user",
          select: "userName email userImage phoneNo",
        }),
        Supervisor.find({ region: regionId }).populate({
          path: "user",
          select: "userName email userImage phoneNo",
        }),
        SupportAgent.find({ region: regionId }).populate({
          path: "user",
          select: "userName email userImage phoneNo",
        }),
      ]);

    // Fetch active team members with status: "Active", also populating `user` fields
    const [
      activeAreaManagers,
      activeBdas,
      activeRegionManagers,
      activeSupervisors,
      activeSupportAgents,
    ] = await Promise.all([
      AreaManager.find({ region: regionId, status: "Active" }).populate({
        path: "user",
        select: "userName email userImage phoneNo",
      }),
      Bda.find({ region: regionId, status: "Active" }).populate({
        path: "user",
        select: "userName email userImage phoneNo",
      }),
      RegionManager.find({ region: regionId, status: "Active" }),
      Supervisor.find({ region: regionId, status: "Active" }),
      SupportAgent.find({ region: regionId, status: "Active" }),
    ]);

    // Fetch leads assigned based on regionId and customerStatus
    const leadsAssigned = await Leads.countDocuments({
      regionId,
      customerStatus: "Lead",
    });

    // Calculate total team members
    const totalTeamMembers =
      areaManagers.length +
      bdas.length +
      regionManagers.length +
      supervisors.length +
      supportAgents.length;

    // Calculate total active team members
    const activeTeamMembers =
      activeAreaManagers.length +
      activeBdas.length +
      activeRegionManagers.length +
      activeSupervisors.length +
      activeSupportAgents.length;

    // Prepare response
    res.status(200).json({
      areaManagers,
      bdas,
      totalTeamMembers,
      activeTeamMembers,
      leadsAssigned,
    });
  } catch (error) {
    console.error("Error fetching region details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const ActivityLog = (req, status, operationId = null) => {
  const { id, userName } = req.user;
  const log = { id, userName, status };

  if (operationId) {
    log.operationId = operationId;
  }

  req.user = log;
};
