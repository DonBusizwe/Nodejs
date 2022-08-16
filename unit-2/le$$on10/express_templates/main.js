"use strict";

const port = 3000,
express = require("express"),
app = express(),
layouts = require("express-ejs-layouts"),
homeController = require("./controllers/homeController");

app.set("view engine", "ejs");
app.set("port",process.env.PORT || 3000);

app.use(layouts);
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.get("/name", homeController.respondWithName);

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.listen(app.get("port"), () => {
console.log(`Swerver runnin at http://localhost:${app.get("port")}`);
});

/*
app.listen(port, () => {
  console.log(`Swerver runnin the streets on port: ${port}`);
});
*/
