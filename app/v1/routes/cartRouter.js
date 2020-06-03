module.exports = (dependences) => {
  const express = require("express");
  const router = express.Router();
  const controller = require("../controllers/cartController")(dependences);
  router.post("/", controller.create);
  router.get("/:id", controller.getSingle);

  this.get = () => {
    return router;
  };

  return this;
};
