// jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    // res.send("<h2>Hello</h2>");
    // res.sendFile("index.html");  
    res.sendFile(__dirname+"/index.html");
})

// app.post("/",function(req,res){
    // we are able to pass HTTP request by using body-parser
//     console.log(req.body.num1); 
//     res.send("Thanks for posting that");
// })

app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var sum=num1+num2;

    res.send("The sum of the calculation is "+sum);
}); 

app.listen(3000,function(){
    console.log("Server started at port 3000.");
})