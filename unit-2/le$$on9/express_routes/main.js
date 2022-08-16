"use strict";

const port = 3000,
express = require("express"),
app = express(),
homeController = require("./contollers/homeControllers");

app.use((req, res, next) => {
  console.log(req.query);
  console.log(`Request made to: ${req.url}`);
  next();
});

app.use(express.urlencoded({
  extended: false
})
);
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successo");
});

app.get("/items/:vegetable", homeController.sendReqParam);


app.listen(port, () => {
  console.log(`Swerver runnin on port: ${port}`);
});
