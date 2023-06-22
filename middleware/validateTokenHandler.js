const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


const validateToken = asyncHandler(async (req,res, next) => {
   const token = req.cookies.access_token;
   if(!token){
    res.status(400);
    res.send("Unauthorized user, please login or register beforehand");
   }

   try {
    const data = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    req.user = data;
    
   } catch (error) {
    console.log(error);
    res.sendStatus(403);
   }

   return next();
})

module.exports = validateToken;