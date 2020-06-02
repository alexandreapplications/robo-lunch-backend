module.exports = () => {
  this.getList = () => {
    return new Promise((resolve) => {
      resolve(["A", "B", "C"]);
    });
  };

  this.getSingle = (id) => {
    return new Promise((resolve) => {
      resolve(id);
    });
  };
  return this;
};
