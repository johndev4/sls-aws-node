const aws = require("aws-sdk");

module.exports.handler = async (event, context) => {
  console.log(`Test Lambda : START`);
  try {
    console.log("Received event:", JSON.stringify(event, null, 2));

    switch (event.action) {
      case "dynamodb":
        const ddb = new aws.DynamoDB.DocumentClient({
          region: "ap-southeast-1",
        });

        await ddb
          .scan({
            TableName: "vpc-lambda-access-table-demo",
          })
          .promise()
          .then((data) => {
            const jsonOutput = JSON.stringify(data.Items, null, 2); // Format as JSON with 2-space indentation
            console.log("All items in the table (JSON format):\n", jsonOutput);
          });
        break;
      case "sns":
        const sns = new aws.SNS({
          region: "ap-southeast-1",
        });

        const params = {
          Message: "Hello, I am from testLambda", // Required: The message text
          TopicArn:
            "arn:aws:sns:ap-southeast-1:036003563447:johndev4-demo-sns-topic", // Required: The ARN of the Amazon SNS topic
        };

        await sns
          .publish(params)
          .promise()
          .then((data) => {
            console.log(
              `Message "${params.Message}" sent to the topic ${params.TopicArn}`
            );
            console.log("MessageID is " + data.MessageId);
          });
        break;
      case "lambda":
        const lambda = new aws.Lambda({
          region: "ap-southeast-1",
        });

        const functionName = "demo-johndev4-forvpc-dev-helloWorld";
        const payload = JSON.stringify({
          key1: "value1",
          key2: "value2",
          key3: "value3",
        });

        // Promisify the invoke function
        await lambda
          .invoke({
            FunctionName: functionName,
            Payload: payload,
          })
          .promise()
          .then((data) => {
            const result = JSON.parse(data.Payload);
            console.log("Lambda invocation result:", result);
          })
          .catch((error) => {
            console.error("Error invoking Lambda function:", error);
          });
        break;

      default:
    }

    return { message: "success" };
  } catch (error) {
    console.log(error);
  }
};
