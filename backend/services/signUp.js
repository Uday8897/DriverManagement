const { response } = require("express");
const User = require("../models/User");
const bcrypt = require('bcryptjs');

async function createUser(userData) {
    const { name, email, password } = userData;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId=generateUserId();
    const unique=true;
    const isunique=async(userid)=>{
      const response= await User.find({"userid":userId})
     if(response){
        unique=false;
     }


    }
    if(unique){
    const createdUser = new User({
        name,
        email,
        password: hashedPassword,
        userid:userId,  
        role: "customer"
    });
    
    const savedUser = await createdUser.save();
    console.log(savedUser);
    return savedUser;
}
}
function generateUserId() {
    return `U${Math.floor(Math.random() * 10000)}`;
}
module.exports = { createUser };
