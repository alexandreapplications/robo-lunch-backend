module.exports = (dependences) => {
  const controllerUtils = require("../util/controllerUtils");
  const service = require("../services/cartService")(dependences);
  //const controllerUtils = require("../util/controllerUtils");
  const domain = "default";

  this.create = async (req, res) => {
    try {
      var response = await service.create(domain);
      controllerUtils.handleServiceResponse(response, res);
    } catch (error) {
      controllerUtils.handleServiceResponse(error, res);
    }
  };

  this.getSingle = async (req, res) => {
    try {
      var response = await service.getSingle(domain, req.params.id);
      controllerUtils.handleServiceResponse(response, res);
    } catch (error) {
      controllerUtils.handleServiceResponse(error, res);
    }
  };

  return this;
};
