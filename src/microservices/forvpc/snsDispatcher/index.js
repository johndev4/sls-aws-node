const aws = require("aws-sdk");

module.exports.handler = async (event, context) => {
  console.log(`SNS Dispatcher : START`);
  try {
    console.log("Received event:", JSON.stringify(event, null, 2));
    
    const message = event.Records[0].Sns.Message;
    console.log("From SNS:", message);
    return message;
  } catch (error) {
    console.log(error);
  }
};
