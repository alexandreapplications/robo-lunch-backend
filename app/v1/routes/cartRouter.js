module.exports = (dependences) => {
  const express = require("express");
  const router = express.Router();
  const controller = require("../controllers/cartController")(dependences);
  router.put("/", controller.create);

  this.get = () => {
    return router;
  };

  return this;
};
