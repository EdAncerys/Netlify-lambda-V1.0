// /.netlify/functions/yep

exports.handler = function (event, context, callback) {
  //event - similar to express Request object
  console.log(event);

  let data = JSON.stringify({ body: 'Hello World' });
  console.log(data);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: `Yep. Yep. Yep. ${data}` }),
  });
};
