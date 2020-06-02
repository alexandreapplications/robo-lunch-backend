require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const helmet = require("helmet");
const bodyParser = require("body-parser");
const noCache = require("nocache");
const appRouterV1 = require("./app//v1/app.js");
app.use(
  cors({
    origin: "*",
    methods: "GET,POST",
  })
);
app.use(helmet());
app.use(noCache());
app.use(bodyParser.json());
app.get("/alive/", (req, res) => res.send("The application is alive."));
app.use("/api/v1/", appRouterV1);
app.get("/", (req, res) => res.send("Robo lunch backend"));

app.listen(process.env.EXPRESS_PORT, () =>
  console.log(
    `The application has started correctly using port: ${process.env.EXPRESS_PORT}`
  )
);
