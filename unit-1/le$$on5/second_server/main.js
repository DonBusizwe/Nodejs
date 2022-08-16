"use strict";

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();

  const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
  };

app.on("request", (req, res) => {
  var body = [];
  req.on("data", (bodyData) => {
    body.push(bodyData);
  });
  req.on("end", () => {
    body = Buffer.concat(body).toString();
    console.log(`Request Body Contents: ${body}`);
  });

console.log(`Method: ${getJSONString(req.method)}`);
 console.log(`URL: ${getJSONString(req.url)}`);
 console.log(`Header: ${getJSONString(req.headers)}`);

  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });

  let responseMessage = "<h1>WE GON DREAM <br>KEEP DA DREAM ALIVE</h1>";
  res.end(responseMessage);
});

app.listen(port);
console.log(`The server has started and is glistening on port number:${port}`);
