// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const showJokes = document.getElementById('jokeContainer');
  
    fetch(API_URL, { headers: { Accept: 'application/json' } })
  .then(response => response.json())
  .then(data => showJokes.innerText = data.joke
  );
}

window.onload = () => fetchJoke();

