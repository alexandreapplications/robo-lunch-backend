const moment = require("moment");
const axiosUtil = require("../util/apiUtils");

module.exports = (dependences) => {
  this.insert = (domain) => {
    return new Promise((resolve, reject) => {
      const modelToAdd = {
        status: "open",
        userId: "",
        timestamp: moment().utc(),
        items: [],
      };
      axiosUtil.handleResponse(
        dependences.axios.post(
          `http://localhost:3001/cart_${domain}`,
          modelToAdd
        ),
        resolve,
        reject
      );
    });
  };

  this.getSingle = (domain, id) => {
    return new Promise((resolve, reject) => {
      axiosUtil.handleResponse(
        dependences.axios.get(`http://localhost:3001/cart_${domain}/${id}`),
        resolve,
        reject
      );
    });
  };
  return this;
};
