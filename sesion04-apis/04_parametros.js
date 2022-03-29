const http = require("http");
const url = require("url");

const server = http.createServer(function (request, response) {
  const obj = url.parse(request.url, true);
  const n = parseInt(obj.query.n);

  if (isNaN(n)) {
    response.write("ERROR, el parametro no es un numero");
  } else {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
      factorial = factorial * i;
    }

    response.write(n + "! = " + factorial);
  }

  response.end();
});

server.listen(8080);
