"use strict";
const port = 3000,
http = require("http"),
httpStatusCodes = require("http-status-codes"),
router = require("./router"),
fs = require("fs"),
plainTextContentType = {
  "Content-Type": "text/plain"
},
htmlContentType = {
  "Content-Type": "text/html"
},
customReadFile = (file, res) => {
  fs.readfile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log("Error leading da filee...");
    }
    res.end(data);
  });
};
router.get("/", (req, res) => {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end("INDEX");
});
router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});
router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end("POSTED");
});
http.createServer(router.handle).listen(3000);
console.log(`Da swerver is glistening on port number:
  ${port}`);


  
