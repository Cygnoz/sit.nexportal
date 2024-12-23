const User = require('../database/model/user')
const Praise = require('../database/model/praise')
const mongoose = require('mongoose');
const moment = require('moment-timezone');



const dataExist = async (usersId) => {
    const [userExists] = await Promise.all([
      User.find({ _id: usersId }, { _id: 1, userName: 1 }),
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

        const { userExists  } = await dataExist( usersId );

        if (!validateUserExists( userExists, res )) return;


        const savedPraise = await createNewPraise(cleanedData,  usersId , userId, userName );

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



  // const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

   // Create New Debit Note
   function createNewPraise(data, newPraise , usersId,  userId, userName) {
    // const { dateTime } = generateOpeningDate(); // Auto-generate dateTime
    const openingDate = moment().format('YYYY-MM-DD HH:mm:ss');  // Or `moment().toDate()` if you need a Date object


    const newTickets = new Praise({
         ...data ,
         newPraise, 
         openingDate:openingDate,
        usersId ,
        userId : userId, 
        userName : userName });
    return newTickets.save();
  }




//   // Function to generate the current date and time in a specified time zone
// function generateOpeningDate(
//   timeZone = "Asia/Kolkata",
//   dateFormat = "YYYY-MM-DD",
//   dateSplit = "-",
//   timeFormat = "HH:mm:ss",
//   timeSplit = ":"
// ) {
//   // Get the current date-time in the specified time zone
//   const localDate = moment.tz(new Date(), timeZone);

//   // Format date
//   let formattedDate = localDate.format(dateFormat);

//   // Replace default separators in the date if a custom split character is provided
//   if (dateSplit) {
//     formattedDate = formattedDate.replace(/[-/]/g, dateSplit);
//   }

//   // Format time
//   const formattedTime = localDate.format(timeFormat).replace(/:/g, timeSplit);

//   // Get time zone abbreviation
//   const timeZoneName = localDate.format("z");

//   // Combine date, time, and time zone
//   const dateTime = `${formattedDate} ${formattedTime} (${timeZoneName})`;

//   return {
//     date: formattedDate,
//     time: `${formattedTime} (${timeZoneName})`,
//     dateTime,
//   };
// }

//const openingDate = generateOpeningDate();


  
const ActivityLog = (req, status, operationId = null) => {
    const { id, userName } = req.user;
    const log = { id, userName, status };
  
    if (operationId) {
      log.operationId = operationId;
    }
  
    req.user = log;
  };

      // Validate data existing
      function validateUserExists( userExists ,res ) {
        if (!userExists) {
          res.status(404).json({ message: "User not found" });
          return false;
        }
      
        return true;
      }


      exports.getAllPraises = async (req, res) => {
        try {
          const praises = await Praise.find(); // Fetch all praises
      
          const enrichedPraise = await Promise.all(
            praises.map(async (praise) => {
              const { usersId } = praise;
      
              // Fetch related details using dataExist
              const { userExists } = await dataExist(usersId);
    

              return {
                ...praise.toObject(),
                userDetails: userExists || null,
              };
            })
          );
      
          res.status(200).json({
            message: "Praises fetched successfully.",
            praises: enrichedPraise,
          });
        } catch (error) {
          console.error("Error fetching praises:", error);
          res.status(500).json({
            message: "Internal server error.",
          });
        }
      };
      

//   exports.getAllPraises = async (req, res) => {
//     try {
//       const praises = await Praise.find(); // Fetch all praises
    
//  // Enrich data for each lead
//  const enrichedPraise = await Promise.all(
//   praises.map(async (praise) => {
//     const {  usersId  } = praise;


//         // Fetch related details using dataExist
//         const { userExists } = await dataExist( usersId );

//         return {
//           ...praise.toObject(),
//           userDetails: userExists?.[0] || null,      // Assuming bdaExists is an array
//         };
//       })
//     );
//       res.status(200).json({ 
//         message: "Praises fetched successfully.", 
//         praises : enrichedPraise
//       });
//     } catch (error) {
//       console.error("Error fetching praises:", error);
//       res.status(500).json({ 
//         message: "Internal server error." 
//       });
//     }
//   };
  

  // Get All Praises for a User
exports.getAllPraisesForUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId provided." });
    }

    // Fetch all praises for the given userId
    const praises = await Praise.find({ usersId: userId }); // Adjust the field name to match your schema

    if (praises.length === 0) {
      return res.status(404).json({ message: "No praises found for this user." });
    }

    res.status(200).json({
      message: "Praises fetched successfully.",
      praises,
    });
  } catch (error) {
    console.error("Error fetching praises for user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};