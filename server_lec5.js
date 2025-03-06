const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}))
app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
})
app.post("/adduser",(req,res)=>{
    let {name,email,password} = req.body;
    console.log(name,email,password)
})


app.listen(5643,()=>{
    console.log("server started");
})