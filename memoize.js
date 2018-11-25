const memoize = (fn) => {
  return (...args) => {
      fn.cache = fn.cache || {};
      return fn.cache[args] ? fn.cache[args] : (fn.cache[args] = fn.apply(this,args))
  }
};

module.exports = memoize;