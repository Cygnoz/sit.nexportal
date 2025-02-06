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



// // Controller function to get top-performing Area Managers and BDAs by region
// exports.getTopPerformersByRegion = async (req, res) => {
//   try {
//     const { regionId } = req.params;

//     // Check if the region exists
//     const region = await Region.findById(regionId);
//     if (!region) {
//       return res.status(404).json({ message: "Region not found" });
//     }

//     // Get Area Managers under the region
//     const areaManagers = await AreaManager.find({ region: regionId }).populate('user', 'userImage userName');
    
//     // Get BDAs under the region
//     const bdas = await Bda.find({ region: regionId }).populate('user', 'userImage userName');

//     // Calculate lead conversion rate for Area Managers
//     const areaManagerPerformers = await Promise.all(
//       areaManagers.map(async (manager) => {
//         const totalLeads = await Leads.countDocuments({ areaManager: manager._id });
//         const convertedLeads = await Leads.countDocuments({
//           areaManager: manager._id,
//           customerStatus: { $ne: "Lead" },
//         });

//         const conversionRate = totalLeads === 0 ? 0 : ((convertedLeads / totalLeads) * 100).toFixed(2);

//         return {
//           _id: manager._id,
//           userImage: manager.user?.userImage || "",
//           userName: manager.user?.userName || "Unknown",
//           conversionRate: `${conversionRate}%`,
//         };
//       })
//     );

//     // Calculate lead conversion rate for BDAs
//     const bdaPerformers = await Promise.all(
//       bdas.map(async (bda) => {
//         const totalLeads = await Leads.countDocuments({ bdaId: bda._id });
//         const convertedLeads = await Leads.countDocuments({
//           bdaId: bda._id,
//           customerStatus: { $ne: "Lead" },
//         });

//         const conversionRate = totalLeads === 0 ? 0 : ((convertedLeads / totalLeads) * 100).toFixed(2);

//         return {
//           _id: bda._id,
//           userImage: bda.user?.userImage || "",
//           userName: bda.user?.userName || "Unknown",
//           conversionRate: `${conversionRate}%`,
//         };
//       })
//     );

//     // Return the response
//     res.status(200).json({
//       region: region.name,
//       areaManagers: areaManagerPerformers,
//       bdas: bdaPerformers,
//     });
//   } catch (error) {
//     console.error("Error fetching top performers by region:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };



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
    const areaManagers = await AreaManager.find({ region: regionId }).populate("user", "userImage userName");

    // Get BDAs under the region
    const bdas = await Bda.find({ region: regionId }).populate("user", "userImage userName");

    // Helper function to calculate lead conversion rate
    const calculateConversionRate = async (collection, idField, id) => {
      const totalLeads = await Leads.countDocuments({ [idField]: id });
      const convertedLeads = await Leads.countDocuments({ [idField]: id, customerStatus: { $ne: "Lead" } });
      return totalLeads === 0 ? 0 : ((convertedLeads / totalLeads) * 100).toFixed(2);
    };

    // Calculate lead conversion rate for Area Managers
    let areaManagerPerformers = await Promise.all(
      areaManagers.map(async (manager) => {
        const conversionRate = await calculateConversionRate(Leads, "areaManager", manager._id);
        return {
          _id: manager._id,
          userImage: manager.user?.userImage || "",
          userName: manager.user?.userName || "Unknown",
          conversionRate: parseFloat(conversionRate),
        };
      })
    );

    // Sort by conversion rate in descending order and limit to top 10
    areaManagerPerformers = areaManagerPerformers
      .sort((a, b) => b.conversionRate - a.conversionRate)
      .slice(0, 10);

    // Calculate lead conversion rate for BDAs
    let bdaPerformers = await Promise.all(
      bdas.map(async (bda) => {
        const conversionRate = await calculateConversionRate(Leads, "bdaId", bda._id);
        return {
          _id: bda._id,
          userImage: bda.user?.userImage || "",
          userName: bda.user?.userName || "Unknown",
          conversionRate: parseFloat(conversionRate),
        };
      })
    );

    // Sort by conversion rate in descending order and limit to top 10
    bdaPerformers = bdaPerformers
      .sort((a, b) => b.conversionRate - a.conversionRate)
      .slice(0, 10);

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

  
exports.getPerformanceByArea = async (req, res) => {
  try {
    const { regionId } = req.params;
 
    // Find all areas under the given region
    const areas = await Area.find({ region: regionId }).select("_id areaName");
    if (!areas.length) {
      return res.status(404).json({ message: "No areas found for this region." });
    }
 
    const areaIds = areas.map(area => area._id);
 
    // Aggregate Leads to count Licensers per area
    const leadData = await Leads.aggregate([
      { $match: { areaId: { $in: areaIds }, customerStatus: "Licenser" } },
      {
        $group: {
          _id: "$areaId",
          licenserCount: { $sum: 1 }
        }
      }
    ]);
 
    // Fetch Area Managers and populate the user fields (like userName)
    const areaManagers = await AreaManager.find({ area: { $in: areaIds } })
      .populate('user', 'userName')  // Populating userName and userImage from User collection
      .lean();
 
    const areaManagerMap = Object.fromEntries(
      areaManagers.map(manager => [String(manager.area), manager.user])  // Storing populated user data
    );
 
    const response = areas.map(area => {
      const leadInfo = leadData.find(ld => String(ld._id) === String(area._id)) || {};
      return {
        areaId: area._id,
        areaName: area.areaName,
        areaManager: areaManagerMap[String(area._id)] || null,  // Area Manager now includes user details
        licenserCount: leadInfo.licenserCount || 0
      };
    });
 
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
 