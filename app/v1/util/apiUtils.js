function handleResponse(reqPromise, resolve, reject) {
  reqPromise
    .then((response) => {
      resolve(validateResponse(response));
    })
    .catch((err) => {
      reject(validateError(err));
    });
}

function validateResponse(response) {
  return {
    status: response.status,
    status_text: response.status_text,
    data: response.data,
  };
}

function validateError(error) {
  return {
    status: error.response.status,
    status_text: error.response.status_text,
  };
}

module.exports = {
  handleResponse,
};
