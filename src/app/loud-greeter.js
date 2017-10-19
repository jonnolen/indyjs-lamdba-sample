let _ = require('lodash');

module.exports = {
 greet(name) {
    return `HI, ${_.toUpper(name)}!`;
  }
}
