const Region = require('../database/model/region')



exports.addRegion = async (req, res, next) => {
  try {
    const {  regionName, country, description } = req.body;

    // Validate the required fields
    if ( !regionName || !country) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }
    // Count existing organizations to generate the next organizationId
  let nextId = 1;
  const lastRegion = await Region.findOne().sort({ _id: -1 }); // Sort by creation date to find the last one
  if (lastRegion) {
    const lastId = parseInt(lastRegion.regionCode.slice(4)); // Extract the numeric part from the customerID
    nextId = lastId + 1; // Increment the last numeric part
  }    
  const regionCode = `REG-${nextId.toString().padStart(4, '0')}`;
const status = "Active"
  

    // Check if the regionCode already exists
    const existingRegion = await Region.findOne({
      $or: [ { regionName }],
    });
    if (existingRegion) {
      return res.status(400).json({ message: "Region name already exists" });
    }
    // Create a new region entry
    const newRegion = new Region({ regionCode, regionName, country, description , status});

    await newRegion.save();
    res.status(201).json({ message: "Region added successfully", region: newRegion });

    // Pass operation details to middleware
    ActivityLog(req, "successfully", newRegion._id );
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
  
      res.status(200).json({ message: "Regions retrieved successfully", regions });
  
    } catch (error) {
      console.error("Error fetching all regions:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  
  exports.updateRegion = async (req, res, next) => {
    try {
      const { regionId } = req.params;
      const { regionCode ,regionName, country, description } = req.body;
  
      const existingRegion = await Region.findOne({
        $or: [{ regionCode }, { regionName }],
        _id: { $ne: regionId },
      });
  
      if (existingRegion) {
        let message = "Conflict: ";
        if (existingRegion.regionCode === regionCode) message += "regionCode already exists. ";
        if (existingRegion.regionName === regionName) message += "regionName already exists. ";
        return res.status(400).json({ message: message.trim() });
      }
  
      const updatedRegion = await Region.findByIdAndUpdate(
        regionId,
        {regionCode, regionName, country, description },
        { new: true }
      );

      if (!updatedRegion) {
        return res.status(404).json({ message: "Region not found" });
      }
  
      res.status(200).json({ message: "Region updated successfully", region: updatedRegion });
  
      // Pass operation details to middleware
      ActivityLog(req, "successfully", updatedRegion._id );
      next();
    } catch (error) {
      console.error("Error updating region:", error);
      res.status(500).json({ message: "Internal server error" });
      ActivityLog(req, "Failed");
      next();
    }
  };
  

  exports.deleteRegion = async (req, res, next) => {
    try {
      const { regionId } = req.params;
  
      // Delete the region
      const deletedRegion = await Region.findByIdAndDelete( regionId );
  
      if (!deletedRegion) {
        return res.status(404).json({ message: "Region not found" });
      }
  
      res.status(200).json({ message: "Region deleted successfully" });
  
      // Pass operation details to middleware
      // const { id, userName } = req.user;
      // req.user = {id, userName,  status: "successfully", operationId: deletedRegion._id };
      // next();
      ActivityLog(req, "successfully");
      next();
  
    } catch (error) {
      console.error("Error deleting region:", error);
      res.status(500).json({ message: "Internal server error" });
      // const { id, userName } = req.user;
      // req.user = {id, userName,  status: "Failed" };
      // next();
     
    ActivityLog(req, "Failed");
    next();
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