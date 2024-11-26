const Region = require('../database/model/region')


exports.addRegion = async (req, res, next) => {
    try {
      const { regionCode, regionName, country, description } = req.body;
  
      // Validate the required fields
      if (!regionCode || !regionName || !country) {
        return res.status(400).json({ message: "All required fields must be provided" });
      }
  
      // Check if the regionCode already exists
      const existingRegion = await Region.findOne({ regionCode });
      if (existingRegion) {
        return res.status(400).json({ message: "Region code already exists" });
      }
  
      // Create a new region entry
      const newRegion = new Region({ regionCode, regionName, country, description });
  
      await newRegion.save();
      res.status(201).json({ message: "Region added successfully", region: newRegion });
  
      // Pass operation details to middleware
      req.user = { status: "successfully", operationId: newRegion._id };
      next();
  
    } catch (error) {
      console.error("Error adding region:", error);
      res.status(500).json({ message: "Internal server error" });
      req.user = { status: "Failed" };
      next();
    }
  };
  
  

  exports.getRegion = async (req, res) => {
    try {
      const { regionCode } = req.params;
  
      const region = await Region.findOne({ regionCode });
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
  
      res.status(200).json({ message: "Regions retrieved successfully", regions });
  
    } catch (error) {
      console.error("Error fetching all regions:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  
  exports.updateRegion = async (req, res, next) => {
    try {
      const { regionCode } = req.params;
      const { regionName, country, description } = req.body;
  
      // Update the region with new data
      const updatedRegion = await Region.findOneAndUpdate(
        { regionCode },
        { regionName, country, description },
        { new: true } // Return the updated document
      );
  
      if (!updatedRegion) {
        return res.status(404).json({ message: "Region not found" });
      }
  
      res.status(200).json({ message: "Region updated successfully", region: updatedRegion });
  
      // Pass operation details to middleware
      req.user = { status: "successfully", operationId: updatedRegion._id };
      next();
  
    } catch (error) {
      console.error("Error updating region:", error);
      res.status(500).json({ message: "Internal server error" });
      req.user = { status: "Failed" };
      next();
    }
  };
  

  exports.deleteRegion = async (req, res, next) => {
    try {
      const { regionCode } = req.params;
  
      // Delete the region
      const deletedRegion = await Region.findOneAndDelete({ regionCode });
  
      if (!deletedRegion) {
        return res.status(404).json({ message: "Region not found" });
      }
  
      res.status(200).json({ message: "Region deleted successfully" });
  
      // Pass operation details to middleware
      req.user = { status: "successfully", operationId: deletedRegion._id };
      next();
  
    } catch (error) {
      console.error("Error deleting region:", error);
      res.status(500).json({ message: "Internal server error" });
      req.user = { status: "Failed" };
      next();
    }
  };
  