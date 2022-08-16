"use strict";

const port = 3000,
http = require("http"),
httpStatus= require("http-status-codes"),
fs = require("fs");

const routeMap = {
  "/": "views/index.html"
};
http.createServer((req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
});

if (routeMap[req.url]) {
  fs.readFile(routeMap[req.url], (error, data) => {
    res.write(data);
    res.end();
  });
} else {
  res.end("<h1>Hades Marazo, not found.</h1>");
}
})

const getViewUrl = (url) => {
  return `views${url}.html`;
};
http.createServer((req, res) => {
  let viewUrl = getViewUrl(req.url);
  fs.readFile(viewUrl, (error, data) => {
    if (error) {
      res.writeHead(httpStatus.NOT_FOUND);
      res.write("<h1>Hades Boss Asitholi</h1>");
    } else {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
      });
      res.write(data);
    }
    res.end();
  });
})

.listen(port);
console.log(`The server hast started and is glistening on port number:
  ${port}`);
