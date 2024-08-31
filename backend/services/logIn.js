const bcrypt=require("bcryptjs")
const User=require("../models/User")
const {generateToken}=require("../utils/jwtUtils")
async function login(mail,password){
    try{
   const existingUser=await User.findOne({"email":mail})
   if(!existingUser){
    throw new Error("User not found")
   }
   const ispasswordValid=bcrypt.compare(password,existingUser.password)
   if(!ispasswordValid){
    throw new Error("Incorrect Password")
   }
   const token=generateToken(existingUser);
   return token;
    }catch(error){
        throw new Error("Invalid Credentials")
    }
}
module.exports={login}