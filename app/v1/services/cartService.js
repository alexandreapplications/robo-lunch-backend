module.exports = (dependences) => {
  this.create = () => {
    return dependences.cartRepository.insert("teste");
  };
  return this;
};
