const http = require("http");

const server = http.createServer(function (request, response) {
  console.log("Recibi peticion");

  // Escribiendo en la respuesta el texto "Hello World"
  response.write("Hello World");

  // SUPER IMPORTANTE: Terminar la petición
  response.end(); // Sin esta línea, el código no va a funcionar
});

server.listen(8080);
