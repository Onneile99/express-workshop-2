const express = require("express");
const app = express();

// Add this to the top of your file
const exphbs = require("express-handlebars");

// Then these two lines after you initialise your express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/",(req,res)=>{
  res.render("index",{
    title:"Yeah! My home page is better that the other one",
    subheading:"How is your's"
  });
})

app.get("/my-cv", (req,res)=>{
res.render("my-cv",{
  title:"Onneile's CV",
  subheading:"How is your's"
    });
})

app.get("/admin",(req,res)=>{
  res.render("admin",{
  title:"CODE YR FUTURE MANCHESTER",
  subheading:"code yr future London "
});
})

app.get("/about", function(req,res){
  res.render("about",{
  title:"A little bit about what i do.",
  subheading:"Code Dream"
});
})

app.get("/contact", function(req,res){
  res.render("contact",{
  title:"My details, Appoitment Only please.",
  subheading:"How about tommorow "
});
})



// The extensions 'html' allows us to serve file without adding .html at the end 
// i.e /my-cv will server /my-cv.html
app.use(express.static("public", {'extensions': ['html']}));


// what does this line mean: process.env.PORT || 3000
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});