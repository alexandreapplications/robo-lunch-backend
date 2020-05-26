var express = require("express");
// var onoffRoute = require('./routes/onoffRoutes');
// var gitRoute = require('./routes/gitRoutes');
// var awsRdsRouter = require('./routes/awsRdsRouter');
var router = express.Router();
var itemRouter = require("./routes/itemRouter");

router.get("/alive", (req, res) => res.send("The application is alive."));
router.use("/item", itemRouter);

module.exports = router;
