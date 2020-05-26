require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const helmet = require("helmet");
const bodyParser = require("body-parser");
const noCache = require("nocache");
const appRouter = require("./app/app.js");
app.use(
  cors({
    origin: "*",
    methods: "GET,POST",
  })
);
app.use(helmet());
app.use(noCache());
app.use(bodyParser.json());
app.use("/api/", appRouter);

app.listen(process.env.EXPRESS_PORT, () =>
  console.log(
    `The application has started correctly using port: ${process.env.EXPRESS_PORT}`
  )
);
