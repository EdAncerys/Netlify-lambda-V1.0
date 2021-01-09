const URL = '/api/ron/quotes';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('funcOne').addEventListener('click', funcOne);
  document.getElementById('funcTwo').addEventListener('click', funcTwo);
  document.getElementById('funcThree').addEventListener('click', funcThree);
});

function funcOne(ev) {
  ev.preventDefault();
  console.log('Fetching Data...');

  fetch(URL)
    .then((resp) => resp.json())
    .then((content) => {
      let main = document.querySelector('main');
      main.innerHTML = `<h2>${content[0]}</h2>`;
      console.log('Done...');
    })
    .catch((err) => console.error);
}

function funcTwo(ev) {
  ev.preventDefault();
  console.log('Calling Lambda...');
  let url = '/api/lambdaGET';

  fetch(url)
    .then((resp) => resp.json())
    .then((content) => {
      let main = document.querySelector('main');
      main.innerHTML = `<h2>${content.msg}</h2>`;
    })
    .catch((err) => console.error);
}

function funcThree(ev) {
  ev.preventDefault();
  console.log('get octocat');

  fetch('/api/lambdaOcto')
    .then((res) => res.json())
    .then((data) => {
      let main = document.querySelector('main');
      let content = data.map((item) => {
        return `<li>${item.name}</li>`;
      });
      main.innerHTML = `<ul>${content}</ul>`;
    })
    .catch(console.error);
}
