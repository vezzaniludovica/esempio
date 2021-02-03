const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = new express();
app.use(bodyParser.json());
app.post("/indirizzo", (req,res)=>{
  const a = req.body;
  console.log(a);
  res.json({"key":"value"})
})
app.listen(8080, ()=>console.log("server listening on port 8080"))


const express= require("express");
const bodyParser = require("body-parser")
const fetch= require("node-fetch")
const app= new express();
app.use(bodyParser.json())
app.post("/somma-dispari",(req,res)=>{
    const a= req.body.numbers;
    console.log(a);
    let s=0;
    a.forEach(el=> {
        if(el%2!==0){

        s+=el}
    })
    res.json({
        sum:s
    })
})
app.listen(8080, () => console.log("server listening on port 8080"))

const express= require("express");
const bodyParser = require("body-parser")
const fetch= require("node-fetch")
const app= new express();
app.use(bodyParser.json())
app.put("/lista-parole-b",(req,res)=>{
    const a= req.body.words;
    console.log(a);
    let counter=0
    let s=[];
    a.forEach(el=> {
        if(el.length<4){
        counter+=1
        s.push(el)
        
    }
    
    })
    res.json({
        count:counter,
        words:s.join(" ")
    })
})
app.listen(8080, () => console.log("server listening on port 8080"))


