//instaloms express 
const express = require('express');
//retorna una objeto que podamos confirgra 

//este objeto app permite crear rutas y que  va responder y que respueta enviar 
const app = express();

//importamos body-parser
const bodyParser = require('body-parser');

//utiliazado el objeto app puede usar body aprser se pedimo a express que use bodyparser l para ler el cuerpo deuna peticion con el formato urlencode,
app.use(bodyParser.urlencoded(
    { extended: true }
));

app.get('/saludo' , function (req, res){

    //res.send("HOLA DESDE Express ");
    res.send(`Hola ${req.query.name}`);
    

});

app.post('/', function (req, res ){

    res.send(`Hola ${req.body.name}`);
});

app.listen(3000);
