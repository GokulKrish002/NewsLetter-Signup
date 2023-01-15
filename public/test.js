const express = require("express");
const bodyparser = require("body-parser");


const app = express();

app.get("/",function(req,res){
    app.sendFile(__dirname+"/succsss.html")
})

app.listen(3000,function(){
    console.log("Server is up and running..");
})