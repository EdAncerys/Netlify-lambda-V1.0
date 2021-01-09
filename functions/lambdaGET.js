// /.netlify/functions/lambdaGET
require('dotenv').config(); // Enabling to load Environment variables from a .env File

exports.handler = function (event, context, callback) {
  //event - similar to express Request object
  console.log(event);

  let data = process.env.ENV_VARIABLE;
  console.log(data);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: `Yep. Yep. Yep. ${data}` }),
  });
};
