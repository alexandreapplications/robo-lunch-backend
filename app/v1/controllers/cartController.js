module.exports = (dependences) => {
  const service = require("../services/cartService")(dependences);

  this.create = async (req, res) => {
    try {
      var response = await service.create();
      res.send(response);
    } catch (error) {
      res
        .status(400) // HTTP status 404: NotFound
        .send(
          `Erro na configuração; Host: ${process.env.HOST}; Message: ${error.message}`
        );
    }
  };
  return this;
};
