const moment = require("moment");
const okRegex = /^2\d\d$/g;
async function handleServiceResponse(result, res) {
  if (result.status) {
    if (okRegex.test(result.status)) {
      res.status(result.status).send(result.data);
    } else {
      res.status(result.status).send(result.data);
    }
  } else {
    var code = moment().utc().format("YYMMDDHHmmssSSS");
    res.status("400").send("An error has ocurred: " + code);
    result.code = code;
    console.error(result);
  }
}

module.exports = {
  handleServiceResponse,
};
