const mongoose=require("../configurations/dbConfig")
const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    },
    userid:{
        type:String,
        required:true    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","customer"],
        default:"customer"
    }
});
module.exports=mongoose.model("user",userSchema);