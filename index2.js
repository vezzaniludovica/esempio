const express= require ("express");
const fetch= require ("node-fetch")
const app = new express();


 /* ACCREDITAMENTO */ 
    fetch("http://192.168.1.231:8080/accreditamento",{
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"nome":"Ludovica Vezzani"})
    })
