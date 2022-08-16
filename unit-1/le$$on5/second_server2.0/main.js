"use strict";

const routeResponseMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact the firm</h1>",
  "/about": "<h1>Learn About The Busi-ness</h1>",
  "/hello": "<h1>Hello to a World of DREAM-CHASING</h1>",
  "/error": "<h1>EISH Hade Boss Ayitholakali</h1>"
};

const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
});
if (routeResponseMap[req.url]) {
  res.end(routeResponseMap[req.url]);
} else {
  res.end("<h1>LIVIN DA DREAM</h1>");
  setTimeout(() => res.end(routeResponseMap[req.url]), 4000);

}
});

app.listen(port);
console.log(`the server has started and is glistening on port number:
  ${port}`);
