const Region = require("../database/model/region");
const Area = require("../database/model/area");
const AreaManager = require("../database/model/areaManager");
const Bda = require("../database/model/bda");
const Leads = require("../database/model/leads");


// Controller function to get all areas under a region
exports.getAreasByRegion = async (req, res) => {
    try {
      const { regionId } = req.params;
  
      // Check if the region exists
      const region = await Region.findById(regionId);
      if (!region) {
        return res.status(404).json({ message: "Region not found" });
      }
  
      // Find all areas under the region
      const areas = await Area.find({ region: regionId });
  
      // If no areas are found
      if (areas.length === 0) {
        return res.status(404).json({ message: "No areas found for this region" });
      }
  
      res.status(200).json({ region, areas });
    } catch (error) {
      console.error("Error fetching areas by region:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };



// Controller function to get top-performing Area Managers and BDAs by region
exports.getTopPerformersByRegion = async (req, res) => {
  try {
    const { regionId } = req.params;

    // Check if the region exists
    const region = await Region.findById(regionId);
    if (!region) {
      return res.status(404).json({ message: "Region not found" });
    }

    // Get Area Managers under the region
    const areaManagers = await AreaManager.find({ region: regionId }).populate('user', 'userImage userName');
    
    // Get BDAs under the region
    const bdas = await Bda.find({ region: regionId }).populate('user', 'userImage userName');

    // Calculate lead conversion rate for Area Managers
    const areaManagerPerformers = await Promise.all(
      areaManagers.map(async (manager) => {
        const totalLeads = await Leads.countDocuments({ areaManager: manager._id });
        const convertedLeads = await Leads.countDocuments({
          areaManager: manager._id,
          customerStatus: { $ne: "Lead" },
        });

        const conversionRate = totalLeads === 0 ? 0 : ((convertedLeads / totalLeads) * 100).toFixed(2);

        return {
          _id: manager._id,
          userImage: manager.user?.userImage || "",
          userName: manager.user?.userName || "Unknown",
          conversionRate: `${conversionRate}%`,
        };
      })
    );

    // Calculate lead conversion rate for BDAs
    const bdaPerformers = await Promise.all(
      bdas.map(async (bda) => {
        const totalLeads = await Leads.countDocuments({ bdaId: bda._id });
        const convertedLeads = await Leads.countDocuments({
          bdaId: bda._id,
          customerStatus: { $ne: "Lead" },
        });

        const conversionRate = totalLeads === 0 ? 0 : ((convertedLeads / totalLeads) * 100).toFixed(2);

        return {
          _id: bda._id,
          userImage: bda.user?.userImage || "",
          userName: bda.user?.userName || "Unknown",
          conversionRate: `${conversionRate}%`,
        };
      })
    );

    // Return the response
    res.status(200).json({
      region: region.name,
      areaManagers: areaManagerPerformers,
      bdas: bdaPerformers,
    });
  } catch (error) {
    console.error("Error fetching top performers by region:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

  