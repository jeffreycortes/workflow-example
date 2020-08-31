const print = require('./services/print');
const hotFix = require('./hot-fix');
const feature1 = require('./feature-1');
const feature2 = require('./');

const runApp = () => {
  print(hotFix());
  print(feature1());
  print(feature2());
}

module.exports = runApp;
