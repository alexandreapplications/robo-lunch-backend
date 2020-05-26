const itemService = require("../services/itemService")();

module.exports = () => {
  this.getList = async (req, res) => {
    try {
      var response = await itemService.getList();
      res.send(response);
    } catch (error) {
      res
        .status(400) // HTTP status 404: NotFound
        .send(
          `Erro na configuração; Host: ${process.env.HOST}; Message: ${error.message}`
        );
    }
  };

  this.getSingle = async (req, res) => {
    try {
      var response = await itemService.getSingle(req.params.id);
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
