var express = require("express");
// var onoffRoute = require('./routes/onoffRoutes');
// var gitRoute = require('./routes/gitRoutes');
// var awsRdsRouter = require('./routes/awsRdsRouter');
var router = express.Router();
var itemRouter = require("./routes/itemRouter");

router.get("/alive", (req, res) => res.send("The application is alive."));
router.use("/item", itemRouter);

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./app/swagger.yaml");

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
