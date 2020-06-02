module.exports = (dependences) => {
  const express = require("express");
  const router = express.Router();
  const controller = require("../controllers/itemController")(dependences);
  router.get("/", controller.getList);
  router.get("/:id", controller.getSingle);
  this.get = () => {
    return router;
  };

  return this;
};
