"use strict";

const port = 3000,
http = require("http"),
httpStatus= require("http-status-codes"),
fs = require("fs");

const sendErrorResponse = res => {
  res.writeHead(httpStatus.NOT_FOUND, {
    "Content-Type": "text/html"
  });
  res.write("<h1>Ufuna yipi eFile bafo</h1>");
  res.end();
};

http
.createServer((req, res) => {
  let url = req.url;
  if(url.indexOf(".html") !== -1) {
    res.writeHead(httpStatus.OK, {
      "Content-Type": "text/html"
    });

    gustoReadFile(`./views${url}`, res);
  } else if (url.indexOf(".js") !== -1) {
    res.writeHead(httpStatus.OK, {
      "Content-Type": "text/javascript"
    });

gustoReadFile(`./public/js${url}`, res);
} else if (url.indexOf(".css") !== -1) {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/css"
  });

  gustoReadFile(`./public/css${url}`, res);
} else if (url.indexOf(".png") !== -1) {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "image/png"
  });

  gustoReadFile(`./pulic/images${url}`, res);
} else {
  sendErrorResponse(res);
}
})
.listen(3000);
console.log(`Da Swerver is glistening on port number: ${port}`);

const gustoReadFile = (file_path, res) => {
  if(fs.existsSync(file_path)) {
    fs.readFile(file_path, (error, data) => {
      if (error) {
        console.log(error);
        sendErrorResponse(res);
        return;
      }
      res.write(data);
      res.end();
    });
  } else {
    sendErrorResponse(res);
  };
