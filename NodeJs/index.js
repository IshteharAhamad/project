
const express= require("express");
const mongoose=require("mongoose");
const User_router=require("./Routes/router");
const {connectDb}=require("./Connection")
const app=express();
const Port=5000;
app.use(express.urlencoded({extended:false}));
app.use(express.json());
connectDb("mongodb://127.0.0.1:27017/Charmi");
/// connection ///
// mongoose
// .connect("mongodb://127.0.0.1:27017/Charmi")
// .then(()=>console.log("DB connected"))
// .catch((error)=>console.log("connection Failed",error));
// // create schema//
// const userSchema=new mongoose.Schema({
//     first_name:{
//         type:String,
//         },
//     last_name:{
//         type:String,
//     },
//     email:{
//         type:String,
//         unique:true,
//     },
//     mobile:{
//         type:String,
//     },
//     gender:{
//         type:String,
//     },
// });
// /// create model ////
// const User=mongoose.model("user",userSchema);
// app.post("/api/user", async(req,res)=>{
//     const body=req.body;
//     console.log(req.body);
//     if(!body||!body.first_name||
//         !body.last_name||
//         !body.email||
//         !body.mobile||
//         !body.gender){
//         return res.status(400).json({message:"all fields are required !"});}
//     else{
//     const result= await User.create({
//         first_name:body.first_name,
//         last_name:body.last_name,
//         email:body.email,
//         mobile:body.mobile,
//         gender:body.gender,
//     });
//     console.log(result);
//     return res.status(201).json({
//         message:"User created successfully "});
//     }
// });
// //// all users get API
// app.get("/api/users", async(req, res)=>{
//     const allusers= await User.find({});
//     if(!allusers){
//         return res.status(404).json({message:"No User existed ",});
//     }
//     return res.json(allusers);
// });
// /// single user API
// app
// .route("/api/users/:id")
// .get(async(req,res)=>{
//     const user=await User.findById(req.params.id);
//     if(!user){
//         return res.status(404).json({message:"No User existed ",});  
//     }
//     return res.json(user);
// });
// app
// .route("/api/users/:id")
// .patch(async(req,res)=>{
//     const name=req.body.first_name;
//     const user=await User.findByIdAndUpdate(req.params.id,{first_name:name,});
//     if(!user){
//         return res.status(404).json({message:"No User existed ",});  
//     }
//     return res.json({status: "User name Updated successfully ",});
// });
// app
// .route("/api/users/:id")
// .delete(async(req,res)=>{
//     const user=await User.findByIdAndDelete(req.params.id);
//     return res.json({status: "User deleted successfully ",});
// });

app.use("/api/users",User_router);
app.listen(Port,()=>console.log(`Run on PORT ${Port}`));