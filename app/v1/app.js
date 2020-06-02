// https://tsh.io/blog/dependency-injection-in-node-js/
var express = require("express");
var router = express.Router();
// Instance dependences
var dependences = {
  cartRepository: require("./repository/cartRepository"),
};
var cartRouter = require("./routes/cartRouter")(dependences);
var itemRouter = require("./routes/itemRouter")(dependences);

//
router.use("/:domain/cart", cartRouter.get());
router.use("/:domain/item", itemRouter.get());

// Tratamento do Swagger
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./app/v1/swagger.yaml");
router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
