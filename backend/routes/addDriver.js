const express=require('express')

const adddriver=require("../services/adddriver")
const cors=require('cors')
const router=express.Router();
router.use(cors());
router.post("/adddriver",adddriver.addDriver);
module.exports=router;