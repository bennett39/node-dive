'use strict';

let http = require('http');

function start() {
  function onRequest(request, response) {
    console.log("Request received.")
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello world");
    response.end();
  }

  const PORT = 8080;
  http.createServer(onRequest).listen(PORT);

  console.log("Server started on port " + PORT);
}

exports.start = start;
