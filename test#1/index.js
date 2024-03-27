module.exports.handler = async (event, context) => {
    try {
      console.log(`Remove Signed Note Path : START : ${JSON.stringify(event)}`);  
      context.done(null, event);
    } catch (error) {
      console.log(error);
    }
  };