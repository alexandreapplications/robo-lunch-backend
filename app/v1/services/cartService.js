module.exports = (dependences) => {
  this.create = (domain) => {
    return dependences.cartRepository.insert(domain);
  };
  this.getSingle = (domain, id) => {
    return dependences.cartRepository.getSingle(domain, id);
  };
  return this;
};
