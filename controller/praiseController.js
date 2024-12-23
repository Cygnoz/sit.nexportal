const User = require('../database/model/user')
const Praise = require('../database/model/praise')

const dataExist = async (userId) => {
    const [userExists] = await Promise.all([
      User.find({ _id: userId }, { _id: 1, user: 1 }),
    ]);

    return{
        userExists
    };
}

 
// Add Price Function
exports.addPraise = async (req, res, next) => {
    try {

        const { id: userId, userName } = req.user;

        const cleanedData = cleanPraiseData(req.body);
  
        const { usersId  } = cleanedData;


        const savedPraise = await createNewPraise(cleanedData, usersId , userId, userName );
  
      res.status(201).json({
        message: "Price added successfully",
        praise: savedPraise,
      });
  
      // Log activity (if required)
      ActivityLog(req, "successfully added", savedPraise._id);
      next();
    } catch (error) {
      console.error("Error adding price:", error);
      res.status(500).json({ message: "Internal server error." });
      ActivityLog(req, "Failed");
      next();
    }
  };

  //Clean Data 
  function cleanPraiseData(data) {
    const cleanData = (value) => (value === null || value === undefined || value === "" || value === 0 ? undefined : value);
    return Object.keys(data).reduce((acc, key) => {
      acc[key] = cleanData(data[key]);
      return acc;
    }, {});
  }




   // Create New Debit Note
   function createNewPraise(data, usersId, newPraise ,  userId, userName) {
    const newTickets = new Praise({
         ...data , 
        usersId ,
        newPraise ,
        userId : userId, 
        userName : userName });
    return newTickets.save();
  }


  
const ActivityLog = (req, status, operationId = null) => {
    const { id, userName } = req.user;
    const log = { id, userName, status };
  
    if (operationId) {
      log.operationId = operationId;
    }
  
    req.user = log;
  };



  exports.getAllPraises = async (req, res) => {
    try {
      const praises = await Praise.find(); // Fetch all praises
      res.status(200).json({ 
        message: "Praises fetched successfully.", 
        praises 
      });
    } catch (error) {
      console.error("Error fetching praises:", error);
      res.status(500).json({ 
        message: "Internal server error." 
      });
    }
  };
  