const okRegex = /^2\d\d$/g;
async function handleServiceResponse(result, res) {
  if (okRegex.test(result.status)) {
    res.status(result.status).send(result.data);
  } else {
    res.status(result.status).send(result.data);
  }
}

module.exports = {
  handleServiceResponse,
};
