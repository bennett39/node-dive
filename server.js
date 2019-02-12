'use strict';

let http = require('http');
let url = require('url');

function start() {
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.")
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello world");
    response.end();
  }

  const PORT = 8080;
  http.createServer(onRequest).listen(PORT);

  console.log("Server started on port " + PORT);
}

exports.start = start;
