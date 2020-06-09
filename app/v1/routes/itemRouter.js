module.exports = (dependences) => {
  const router = dependences.express.Router();
  const controller = require("../controllers/itemController")(dependences);
  router.get("/", controller.getList);
  router.get("/:id", controller.getSingle);
  this.get = () => {
    return router;
  };

  return this;
};
