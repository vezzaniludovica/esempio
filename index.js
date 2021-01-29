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
