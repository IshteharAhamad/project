const express=require("express");
const {GetAllUsers,GetUser,UpdateUser,DeleteUser,CreateUser}=require("../Controllers/userhandler");
const router=express.Router();
//// all users get API
router
.route("/")
.get( GetAllUsers)
.post(CreateUser);
/// single user API
router
.route("/:id")
.get(GetUser)
.patch(UpdateUser)
.delete(DeleteUser);
module.exports=router;
