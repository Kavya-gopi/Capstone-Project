const express = require("express");
const {signup, login}=require("../controllers/userController");
const user_routes=express.Router();

user_routes.post('/signup',signup);
user_routes.post('/login',login)

module.exports=user_routes;

