module.exports.handler = async (event) => {
  try {
    console.log("Received event:", JSON.stringify(event, null, 2));
    console.log("value1 =", event.key1);
    console.log("value2 =", event.key2);
    console.log("value3 =", event.key3);
    return event.key1; // Echo back the first key value
  } catch (error) {
    console.error(error);
  }
};
