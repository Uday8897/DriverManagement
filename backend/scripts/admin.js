const user=require("../models/User");
const bcrypt=require('bcryptjs');
async function createAdminAccount(){
    try{
   const existingAdmin=await user.findOne({email:"admin@test.com"});
   if(!existingAdmin){
const newAdmin=new user({
    email:"admin@test.com",
    name:"Admin",
    password:await bcrypt.hash("admin",10),
    role:"admin"
})
await newAdmin.save();
console.log("Admin Created Successfully")
   }else{
    console.log("Admin alreay exists");
   }
    }catch(error){
        console.log(error.message);
    }
}
module.exports=createAdminAccount;