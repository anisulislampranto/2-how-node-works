// events
const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

// Register a listener - recieve two arg first name of the event second callback function or we can say actual listener
myEmitter.on("newSale", () => {
  console.log("new sale");
});

myEmitter.on("newSale", () => {
  console.log("jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`la la la ${stock}`);
});

// raised an event
myEmitter.emit("newSale", 9);

////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("req receved");
  res.end("received");
});

server.on("request", (req, res) => {
  console.log("another req receved");
});

server.on("close", (req, res) => {
  console.log("closed");
});

server.listen(5000, () => {
  console.log("listening tp 5000");
});
