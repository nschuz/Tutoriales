//instaloms express 
const express = require('express');
//retorna una objeto que podamos confirgra 

//este objeto app permite crear rutas y que  va responder y que respueta enviar 
const app = express();

app.get('/saludo' , function (req, res){

    //res.send("HOLA DESDE Express ");
    res.send(`Hola ${req.query.name}`);
    

});

app.listen(3000);
