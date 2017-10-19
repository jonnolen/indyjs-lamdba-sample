let LoudGreeter = require('./app/loud-greeter');

module.exports.greetLoudly = function greetLoudly(event, context, callback){
  callback(null, LoudGreeter.greet(event.name));
};
