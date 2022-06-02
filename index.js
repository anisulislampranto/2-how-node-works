// // events
// const EventEmitter = require("events");
// const http = require("http");

// class Sales extends EventEmitter {
//   constructor() {
//     super();
//   }
// }

// const myEmitter = new Sales();

// // Register a listener - recieve two arg first name of the event second callback function or we can say actual listener
// myEmitter.on("newSale", () => {
//   console.log("new sale");
// });

// myEmitter.on("newSale", () => {
//   console.log("jonas");
// });

// myEmitter.on("newSale", (stock) => {
//   console.log(`la la la ${stock}`);
// });

// // raised an event
// myEmitter.emit("newSale", 9);

// ////////////////////////

// const server = http.createServer();

// server.on("request", (req, res) => {
//   console.log("req receved");
//   res.end("received");
// });

// server.on("request", (req, res) => {
//   console.log("another req receved");
// });

// server.on("close", (req, res) => {
//   console.log("closed");
// });

// server.listen(5000, () => {
//   console.log("listening tp 5000");
// });

// //////////////
// Streams

const fs = require("fs");
const server = require("http").createServer();

require("./modules");

server.on("request", (req, res) => {
  // solution 1 for small data
  //   fs.readFile("text.txt", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.end(data);
  //     }
  //   });
  // readable speed is greater then writeable speeed which couses backend preassure
  // Solution 2 : Streams
  //   const readable = fs.createReadStream("textr.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("file not found");
  //   });
  // Solution 3 best and easiest
  //   const readable = fs.createReadStream("textr.txt");
  //   // readableSourch.pripe(writeableDestination)
  //   readable.pipe(res);
});

server.listen(5000, () => {
  console.log("listening at 5000");
});
