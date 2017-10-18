let _ = require('lodash');

module.exports = {
 greetLoudly(name) {
    return `HI, ${_.toUpper(name)}!`;
  }
}
