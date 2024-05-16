const EventEmitter = require("events");
const stream = new EventEmitter();

module.exports.handler = async (event, context) => {
  let result = await new Promise((resolve, reject) => {
    stream.on("put", (event, data) => {
      resolve(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
    });
  });
  return {
    statusCode: 200,
    body: result,
  };
};

setInterval(() => {
  stream.emit("put", "message", { msg: "it works!" });
}, 5000);

// module.exports.handler = async (event, context) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(event),
//   };
// };
