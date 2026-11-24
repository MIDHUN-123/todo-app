const express=require('express');
const Router=express.Router();
const {loadHomePage}=require('../Controller/homeController');
Router.get('/',loadHomePage);

module.exports=Router;