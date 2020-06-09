module.exports = (dependences) => {
  const controller = require("../controllers/cartController")(dependences);
  const router = dependences.express.Router();
  router.post("/", controller.create);
  router.get("/:id", controller.getSingle);
  router.get("/getByStatus/:status", controller.getByStatus);
  router.post("/:id/item", controller.addItem);
  this.get = () => {
    return router;
  };

  return this;
};
