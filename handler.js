'use strict';

function getLocalGreeting(language) {
  switch(language) {
    case "en":
      return "Hello!";
    case "es":
      return "¡Hola!";
    case "ru":
      return "Привет!";
    default:
      return "👋";
  }
}
module.exports.getLocalGreeting = getLocalGreeting;

function pickLocale() {
  const languages = ["en", "es", "cn", "fr", "ru"];
  //  We miss Python's random.choice
  return languages [Math.floor(Math.random() * languages.length)];
}

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: getLocalGreeting(pickLocale()),
    }),
  };
 
  callback(null, response);
};