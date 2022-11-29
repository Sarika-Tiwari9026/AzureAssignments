const express=require("express");
const {route}=require("express/lib/application");
const { model } = require("mongoose");
const Detail=require("../models/Details")
const Slider=require("../models/Slider")
const Service=require("../models/Services")
const Contact=require("../models/Contact")




const routes=express.Router()

routes.get("/", async(req,res)=>{
   const details=await Detail.findOne({"_id":"6375f72282bcbc63e765614a"})
   const slides=await Slider.find()
   const services=await Service.find()


//    console.log(details);

    res.render("index",{
        details:details,
        slides:slides,
        services:services
    });
    
})

routes.get("/gallery", async(req,res)=>{
   const details=await Detail.findOne({"_id":"6375f72282bcbc63e765614a"})
   const slides=await Slider.find()


    res.render("gallery",{
        details:details,
        slides:slides
    });
    
});

routes.post("/process-contact-form",(request,response)=>{
    console.log("form is submited")
    try{
        const data=Contact.create(request.body)
        console.log(data)
        response.redirect("/")

    }catch(e){
        console.log(e)
        response.redirect("/")
    }
})
module.exports=routes