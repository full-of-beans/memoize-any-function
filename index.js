const memoize = require('./memoize');

const sqrt = num => Math.sqrt(num);

const memoizedSqrt = memoize(sqrt);

console.time("non-memoized call");
console.log(sqrt(4));
console.timeEnd("non-memoized call");

console.time("memoized call");
console.log(memoizedSqrt(4));
console.timeEnd("memoized call");