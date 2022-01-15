const express=require("express");
const app=express();
const port=5000;

app.use("/",require("./routes"));





app.listen(port,function(err){
    if(err){
        console.log("error in running server");
    }
    return console.log(`server is on port :${port}`);
})