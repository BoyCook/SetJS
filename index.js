module.exports = process.env.SET_COV ? require('./lib-cov/set').Set : require('./lib/set').Set;
