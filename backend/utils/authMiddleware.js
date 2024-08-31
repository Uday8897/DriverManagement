 const jwt=require('jsonwebtoken')
const secrectKey=require('../configurations/jwtconfig')
function authenticateToken(res,req,next){
    const header=req.header("Authorization")
    if(!header){
        return res.status(401).json({message:"Unauthorized: Missing token"})
    }
    const [bearer,token]=header.split(" ")
    if(bearer !=="Bearer" || !token){
        res.status(401).json({message:"Unauthorized: Invalid token Format "})
    }
 jwt.verify(token,secrectKey,(err,user)=>{
    if(err){return res.status(403).json({message:"Forbidden"})}
    req.user=user;
    next();
 })
 }
module.exports=authenticateToken;