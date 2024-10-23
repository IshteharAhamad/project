const mongoose=require("mongoose");

// create schema//
const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        },
    last_name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    mobile:{
        type:String,
    },
    gender:{
        type:String,
    },
});
/// create model ////
const User=mongoose.model("user",userSchema);
module.exports=User;