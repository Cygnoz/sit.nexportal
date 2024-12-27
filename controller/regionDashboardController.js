const Region = require("../database/model/region");
const Area = require("../database/model/area");



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
  