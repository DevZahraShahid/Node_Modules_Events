//When exporting function as object
// const EP = require('./logger');
// EP.log("HAKUNA MATATA");

//When exporting the function directly
// const logger = require('./logger');
// logger('Hello from Zahra!');

// 'PATH' Module
const path = require("path");
const pathOBJ = path.parse(__filename);
console.log(pathOBJ);

// 'OS' Module
const os = require("os");
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

//Template to print using backticks
console.log(`TotalMemory: ${totalMemory}`);
console.log(`FreeMemory: ${freeMemory}`);

// FS Module with ASYNC Method - Callback function (IMP)
// const fs= require('fs');

// fs.readdir('./', function(err,files){
//     if(err) console.log('Error: ', err);
//     else console.log('Result: ', files);

// })

//Events Module
const EventEmitter = require("events"); //A class
const logger = require("./logger");
const emitter = new EventEmitter(); // An object created for the class

//Registered a listener
// emitter.on("messageRaised", () => {
//   console.log("Listener Called");
// });

//Raised an event
// emitter.emit("messageRaised");

//Event Arguments
//Registered a Listener using EventArguments
// emitter.on("messageRaised", (args) => {
//   console.log("Listener Called", args);
// });

//Raised an event using EventArguments
// emitter.emit("messageRaised", { id: 001, url: "https://google.com" });

//EVent Arguments Exercise
// emitter.on("logging", (args) => {
//   console.log(args);
// });
// emitter.emit("logging", { data: "HELLOOOOO" });

// Replacement of emitter by creating  an extended class
// const Logger = require("./logger");
// const loggerObj = new Logger();
// loggerObj.on("messsageLogged", (arg) => {
//   console.log("LIstener Called", arg);
// });
// loggerObj.log("messsage");

// HTTP
// const http = require("http");
// const server = http.createServer();
// server.on("connection", (socket) => {
//   console.log("New Connection..");
// });
// server.listen(3000);
// console.log("Listening on port 3000");

//HTTP Upto the Benchmark (improvised)
const http = require("http");
const server = http.createServer((req, res) => {
  //routing for different URLs
  if (req.url === "/") {
    res.write("HELLO WORLD!");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
server.listen(3000);
console.log("Listening on port 3000...");
