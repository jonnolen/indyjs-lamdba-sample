let greetLoudly = require('./app/loud-greater').greetLoudly;

module.exports.greetLoudly = function greetLoudly(event, context, callback){
  callback(null, greetLoudly(event.name));
};
