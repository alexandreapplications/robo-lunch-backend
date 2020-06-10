const axiosUtil = require("../util/apiUtils");

module.exports = (dependences) => {
  this.insert = (domain, record) => {
    return new Promise((resolve, reject) => {
      axiosUtil.handleResponse(
        dependences.axios.post(`http://localhost:3001/cart_${domain}`, record),
        resolve,
        reject
      );
    });
  };

  this.update = (domain, id, data) => {
    return new Promise((resolve, reject) => {
      axiosUtil.handleResponse(
        dependences.axios.put(
          `http://localhost:3001/cart_${domain}/${id}`,
          data
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

  this.getByStatus = (domain, status) => {
    return new Promise((resolve, reject) => {
      axiosUtil.handleResponse(
        dependences.axios.get(
          `http://localhost:3001/cart_${domain}/?status=${status}`
        ),
        resolve,
        reject
      );
    });
  };

  return this;
};
