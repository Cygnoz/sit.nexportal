const Area = require('../database/model/area');
const Region = require('../database/model/region')



// exports.addArea = async (req, res, next) => {
//     try {
//       const { areaCode, areaName, region, description } = req.body;
  
//       // Validate the required fields
//       if (!areaCode || !areaName || !region) {
//         return res.status(400).json({ message: "All required fields must be provided" });
//       }
  
//       // Check if the region exists in the Region collection
//       const existingRegion = await Region.findById(region);
//       if (!existingRegion) {
//         return res.status(404).json({ message: "The specified region does not exist" });
//       }
  
//       // Check if the areaCode or areaName already exists
//       const existingArea = await Area.findOne({
//         $or: [{ areaCode }, { areaName }],
//       });
//       if (existingArea) {
//         return res.status(400).json({ message: "Area code or name already exists" });
//       }
  
//       // Create a new area entry
//       const newArea = new Area({ areaCode, areaName, region, description });
  
//       await newArea.save();
//       res.status(201).json({ message: "Area added successfully"});
  
//       // Pass operation details to middleware
//       logOperation(req, "successfully", newArea._id);
//       next();
//     } catch (error) {
//       console.error("Error adding area:", error);
//       res.status(500).json({ message: "Internal server error" });
//       logOperation(req, "Failed");
//       next();
//     }
//   };
  

exports.addArea = async (req, res, next) => {
  try {
    const { areaName, region, description } = req.body;

    // Validate the required fields
    if ( !areaName || !region) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    // Count existing organizations to generate the next organizationId
  let nextId = 1;
  const lastArea = await Area.findOne().sort({ _id: -1 }); // Sort by creation date to find the last one
  if (lastArea) {
    const lastId = parseInt(lastArea.regionCode.slice(4)); // Extract the numeric part from the customerID
    nextId = lastId + 1; // Increment the last numeric part
  }    
  const areaCode = `AR-${nextId.toString().padStart(4, '0')}`;


    // Check if the region exists in the Region collection
    const existingRegion = await Region.findById(region);
    if (!existingRegion) {
      return res.status(404).json({ message: "The specified region does not exist" });
    }

    // Check if the areaCode or areaName already exists
    const existingArea = await Area.findOne({
      $or: [ { areaName }],
    });
    if (existingArea) {
      return res.status(400).json({ message: "Area name already exists" });
    }

    // Create a new area entry
    const newArea = new Area({ areaCode, areaName, region, description });

    await newArea.save();
    res.status(201).json({ message: "Area added successfully"});

    // Pass operation details to middleware
    logOperation(req, "successfully", newArea._id);
    next();
  } catch (error) {
    console.error("Error adding area:", error);
    res.status(500).json({ message: "Internal server error" });
    logOperation(req, "Failed");
    next();
  }
};

exports.getArea = async (req, res) => {
  try {
    const { areaId } = req.params;

    const area = await Area.findById(areaId).populate('region', 'regionCode regionName').exec();
    
    if (!area) {
      return res.status(404).json({ message: "Area not found" });
    }

    res.status(200).json(area);
  } catch (error) {
    console.error("Error fetching area:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllAreas = async (req, res) => {
    try {
      const areas = await Area.find({}).populate('region', 'regionCode regionName');
  
      if (areas.length === 0) {
        return res.status(404).json({ message: "No areas found" });
      }
  
      res.status(200).json({ message: "Areas retrieved successfully", areas });
    } catch (error) {
      console.error("Error fetching all areas:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };



  exports.updateArea = async (req, res, next) => {
    try {
      const { areaId } = req.params;
      const { areaCode, areaName, region, description } = req.body;
  
      // Check if the region exists in the Region collection
      const existingRegion = await Region.findById(region);
      if (!existingRegion) {
        return res.status(400).json({ message: "Invalid region specified" });
      }
  
      // Check for duplicate areaCode or areaName
      const existingArea = await Area.findOne({
        $or: [{ areaCode }, { areaName }],
        _id: { $ne: areaId },
      });
  
      if (existingArea) {
        let message = "Conflict: ";
        if (existingArea.areaCode === areaCode) message += "areaCode already exists. ";
        if (existingArea.areaName === areaName) message += "areaName already exists. ";
        return res.status(400).json({ message: message.trim() });
      }
  
      // Update the area
      const updatedArea = await Area.findByIdAndUpdate(
        areaId,
        { areaCode, areaName, region, description },
        { new: true }
      );
  
      if (!updatedArea) {
        return res.status(404).json({ message: "Area not found" });
      }
  
      res.status(200).json({ message: "Area updated successfully", area: updatedArea });
  
      // Pass operation details to middleware
      logOperation(req, "successfully", updatedArea._id );
      next();
    } catch (error) {
      console.error("Error updating area:", error);
      res.status(500).json({ message: "Internal server error" });
      logOperation(req, "Failed");
      next();
    }
  };
  

exports.deleteArea = async (req, res, next) => {
  try {
    const { areaId } = req.params;

    const deletedArea = await Area.findByIdAndDelete(areaId);

    if (!deletedArea) {
      return res.status(404).json({ message: "Area not found" });
    }

    res.status(200).json({ message: "Area deleted successfully" });

    // Pass operation details to middleware
    logOperation(req, "successfully");
    next();
  } catch (error) {
    console.error("Error deleting area:", error);
    res.status(500).json({ message: "Internal server error" });
    logOperation(req, "Failed");
    next();
  }
};



const logOperation = (req, status, operationId = null) => {
    const { id, userName } = req.user;
    const log = { id, userName, status };
  
    if (operationId) {
      log.operationId = operationId;
    }
  
    req.user = log;
  };
  