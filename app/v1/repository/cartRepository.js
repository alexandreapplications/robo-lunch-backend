const moment = require("moment");
const axiosUtil = require("../util/apiUtils");
const axios = require("axios");

function insert(domain) {
  return new Promise((resolve, reject) => {
    const modelToAdd = {
      status: "open",
      userId: "",
      timestamp: moment().utc(),
      items: [],
    };
    axiosUtil.handleResponse(
      axios.post(`http://localhost:3001/cart_${domain}`, modelToAdd),
      resolve,
      reject
    );
  });
}

function getSingle(domain, id) {
  return new Promise((resolve, reject) => {
    axiosUtil.handleResponse(
      axios.get(`http://localhost:3001/cart_${domain}/${id}`),
      resolve,
      reject
    );
  });
}

module.exports = {
  insert,
  getSingle,
};
