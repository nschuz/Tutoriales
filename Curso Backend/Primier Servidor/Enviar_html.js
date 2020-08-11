const express = require('express');
const app = express();

app.get('/', function (req, res){
    console.log("ruta: "+__dirname);
    res.sendFile('index.html', {
        root:  __dirname,
        
    });//hacemos automaticamnete la ruta 
   
});
//__dirname tiene la ruta absuluta del proyecto  evitando estar poniendo manue

app.listen(3000);