const User=require("../models/user");
async function GetAllUsers(req,res){
    const allusers= await User.find({});
    if(!allusers){
        return res.status(404).json({message:"No User existed ",});
    }
    return res.json(allusers);
}
async function GetUser(req,res){
    const user=await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({message:"No User existed ",});  
    }
    return res.json(user);
}
async function UpdateUser(req,res){
    const name=req.body.first_name;
    const user=await User.findByIdAndUpdate(req.params.id,{first_name:name,});
    if(!user){
        return res.status(404).json({message:"No User existed ",});  
    }
    return res.json({status: "User name Updated successfully ",});
}
async function DeleteUser(req,res){
    const user=await User.findByIdAndDelete(req.params.id);
    return res.json({status: "User deleted successfully "});
}
async function CreateUser(req, res){
    const body=req.body;
    console.log(req.body);
    if(!body||!body.first_name||
        !body.last_name||
        !body.email||
        !body.mobile||
        !body.gender){
        return res.status(400).json({message:"all fields are required !"});}
    else{
    const result= await User.create({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        mobile:body.mobile,
        gender:body.gender,
    });
    console.log(result);
    return res.status(201).json({
        message:"User created successfully ", id:result._id})
}
}

module.exports={
    GetAllUsers,
    GetUser,
    UpdateUser,
    DeleteUser,
    CreateUser
}