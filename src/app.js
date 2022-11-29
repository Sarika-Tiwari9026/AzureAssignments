// const { response } = require("express");
const express=require("express");
const hbs=require("hbs");
const app=express();
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const routes=require("./routes/main")
const Detail=require("./models/Details")
const Slider=require("./models/Slider")
const Service=require("./models/Services")



app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static/',express.static("public"))
app.use('', routes);



// app.get("/", (request,response)=>{
//     response.send("wow this is data from server");

// })

//***********hbs (Template Engine)**************/

app.set("view engine", "hbs")
app.set("viewa","views")
hbs.registerPartials("views/partials")

// database connection
mongoose.connect("mongodb://localhost/website_tut",()=>{
    console.log("db connected");
    // Service.create([
    //     {
    //         icon:"😄😄",
    //         title:"Provide Best Courses",
    //         description:"We prode courses that help our student learning and placement",
    //         linkText:"http://www.leancodewithdurgesh.com",
    //         link:"Check"
    //     },
    //     {
    //         icon:"🥰🥰",
    //         title:"Provide Best Courses",
    //         description:"We prode courses that help our student learning and placement",
    //         linkText:"http://www.leancodewithdurgesh.com",
    //         link:"Check"
    //     },
    //     {
    //         icon:"❤️❤️",
    //         title:"Provide Best Courses",
    //         description:"We prode courses that help our student learning and placement",
    //         linkText:"http://www.leancodewithdurgesh.com",
    //         link:"Check"
    //     }
     

    // ])

    // Slider.create([
    //     {
    //         title:"Learn java is very easy",
    //         subTitle:"java is one of the most programming language ",
    //         imageUrl:"/static/images/img1.jpg"

    //     },
    //     {
    //         title:"java",
    //         subTitle:"java is one of the most programming language ",
    //         imageUrl:"/static/images/img2.jpg"

    //     },
    //     {
    //         title:"Learn java",
    //         subTitle:"java is one of the most programming language ",
    //         imageUrl:"/static/images/img3.jpg"

    //     },
    // ])







    // Detail.create({
    //     brandName:"Info Technical Solution",
    //     brandIconUrl:"https://img.freepik.com/free-vector/colorfull-parrot-logo-vector_44095-48.jpg?size=338&ext=jpg",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/service"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"ContactUs",
    //             url:"/contactus"
    //         },
    //     ],

    // })
})

app.listen(process.env.PORT | 5556 ,()=>{
    console.log("server started");
});