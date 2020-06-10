const okRegex = /^2\d\d$/g;
const moment = require("moment");
module.exports = (dependences) => {
  this.create = (domain) => {
    const record = {
      status: "open",
      userId: "",
      timestamp: moment().utc(),
      items: [],
    };

    return dependences.cartRepository.insert(domain, record);
  };
  this.getSingle = (domain, id) => {
    return dependences.cartRepository.getSingle(domain, id);
  };
  this.getByStatus = (domain, status) => {
    return dependences.cartRepository.getByStatus(domain, status);
  };
  this.addItem = (domain, cartId, body) => {
    return new Promise(async (resolve, reject) => {
      try {
        var now = moment().utc();
        // Get the object
        var record = await dependences.cartRepository.getSingle(domain, cartId);
        if (okRegex.test(record.status)) {
          body.forEach((item) => {
            record.data.items.push({
              id: now.format("YYMMDDHHmmssSSS"),
              itemId: item.itemId,
              timeStamp: moment().utc(),
              price: item.price,
              quantity: item.quantity,
              status: "requested",
            });
          });
          resolve(
            await dependences.cartRepository.update(domain, cartId, record.data)
          );
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  return this;
};
