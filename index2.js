const express= require ("express");
const fetch= require ("node-fetch")
const app = new express();


 /* ACCREDITAMENTO */ 
    fetch("http://192.168.1.231:8080/accreditamento",{
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"nome":"Ludovica Vezzani"})
    })


    /*ESERCIZIO 1 restituire multipli di 3*/

    fetch("http://192.168.1.231:8080/esercizio/1",{
        method: "get",
        headers: {"x-data": "true"}
        .then(res=>res.json())
        .then(data=>{
            const a=data;
            let s=[];
            a.forEach(el=>{
                if(el%3===0){
                    s.push(el);
                }
            })
            fetch("http://192.168.1.231:8080/esercizio/1",{
                method:"post",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({data:s})
            })
        })})
