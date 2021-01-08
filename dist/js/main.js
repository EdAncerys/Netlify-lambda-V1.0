var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

// const lambdaEndPoint = 'http://localhost:9000';
const lambdaEndPoint = '/.netlify/functions';

fetch(`${lambdaEndPoint}/lambdaGET`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    document.querySelector('#data').innerHTML = result.body; // Render Response Object
    console.log(result);
  })
  .catch((error) => console.log('error', error));
