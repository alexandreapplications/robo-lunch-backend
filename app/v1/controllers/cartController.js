module.exports = (dependences) => {
  const controllerUtils = require("../util/controllerUtils");
  //const controllerUtils = require("../util/controllerUtils");
  const domain = "default";

  this.create = async (req, res) => {
    try {
      var response = await dependences.cartService.create(domain);
      controllerUtils.handleServiceResponse(response, res);
    } catch (error) {
      controllerUtils.handleServiceResponse(error, res);
    }
  };

  this.getSingle = async (req, res) => {
    try {
      var response = await dependences.cartService.getSingle(
        domain,
        req.params.id
      );
      controllerUtils.handleServiceResponse(response, res);
    } catch (error) {
      controllerUtils.handleServiceResponse(error, res);
    }
  };

  this.getByStatus = async (req, res) => {
    try {
      var response = await dependences.cartService.getByStatus(
        domain,
        req.params.status
      );
      controllerUtils.handleServiceResponse(response, res);
    } catch (error) {
      controllerUtils.handleServiceResponse(error, res);
    }
  };

  this.addItem = async (req, res) => {
    try {
      var response = await dependences.cartService.addItem(
        domain,
        req.params.id,
        req.body
      );
      controllerUtils.handleServiceResponse(response, res);
    } catch (error) {
      controllerUtils.handleServiceResponse(error, res);
    }
  };

  return this;
};
