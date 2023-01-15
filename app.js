const express = require("express");
const bodyparser = require("body-parser");
const app =express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
});
app.post("/Welcome",function(req,res){
    var name =req.body.fname+req.body.lname;
    var email = req.body.email;
    console.log(name);
    console.log(email);
    res.send("hello Dude welcome");
});

app.listen(3000,function () {
    console.log("Server is up and running in port 3000");
});




// api key
// a25f318e07a262271cba346c6d82953e-us21