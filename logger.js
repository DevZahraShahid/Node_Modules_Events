// (function (exports, require, module, __filename, __dirname){

var url = "http://google.com";

function log(message) {
  console.log(message);
}

//When exporting function as object
// module.exports.log = log;

//When exporting the function directly
// module.exports = log;

//exporting with a different name
// module.exports.connectingURL = url;

// Module Wrapper Functions
console.log("File name: " + __filename); //current filename
console.log("Directory: " + __dirname); //current directory name

// });

// Replacement of emitter by creating  an extended class
const EventEmitter = require("events");

class logger extends EventEmitter {
  log(message) {
    //function keyword not needed
    console.log(message);

    //Raise an event
    this.emit("messsageLogged", { id: 101, message: "Testing" });
  }
}

module.exports = logger;
