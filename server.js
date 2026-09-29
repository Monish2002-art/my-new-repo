const express=require("express");

const app=express();

const PORT=3000;

app.get("/",(res,req)=>{
    res.setEncoding("APP is working fine");
})

app.listen(PORT,"0.0.0.0",()=>{
    console.log("SERVER is UP and running...!!!!")
    
})