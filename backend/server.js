const express=require('express');
const cors=require('cors')
const signUproute=require("./routes/signup");
const bodyParser=require('body-parser');
const createAdminAccount=require("./scripts/admin");
const loginRoute=require("./routes/login");
const userroute=require("./routes/user")
// const route=require("./routes/addDriver")
const app=express();
const PORT=5000;
app.use(bodyParser.json());
app.use(cors());
createAdminAccount();
app.use("/user",signUproute);
app.use("/auth",loginRoute);
app.use("/api",userroute);
// app.use("/",addDriverroute);
app.listen(PORT,()=>{
    console.log(`Server is running on :http://localhost:${PORT}`);
})
