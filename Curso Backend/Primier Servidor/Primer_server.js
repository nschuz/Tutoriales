const http = require ('http'); // importamos esta liberia http

function responderPeticion (req, res){
    res.end('Hola Mundo');
}

let server = http.createServer(responderPeticion);


server.listen(3000);