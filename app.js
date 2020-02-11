// Code found on JSFiddle, refactored by me.

let handleSubmit = () => {
  // get the value of the input field
  const input = document.getElementById('search').value;
  fetchResults(searchQuery);
}

let fetchResults = (searchQuery) => {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
  fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const results = data.query.search;
    displayResults(results);
  })
  .catch(() => console.log('An error occurred'));
}

let displayResults = (results) => {
  // Store a reference to `articles`
  const searchResults = document.getElementById('articles');
  // Remove all child elements
  searchResults.innerHTML = '';
  // Loop over results array
  results.forEach(result => {
    const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
    // textContent, innerHTML, or innerText? I don't need `insertAdjacentHTML` as it is unsafe.
    articles.insertAdjacentHTML('beforeend',
    `<div id="container">
    <a class="url" href="${url}" target="_blank" rel="noopener">${result.title}</a>
    </h3>
    <span class="resultItem-snippet">${result.snippet}</span><br>
    <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
    </div>`
    );
  });
}

const form = document.getElementById('search');
form.addEventListener('submit', handleSubmit);


const pullRandoArticle = () => {
    const getRando = document.getElementById("rando");
    getRando.addEventListener("click", function () {
      window.open("https://en.wikipedia.org/wiki/Special:Random");
    });
  }
  pullRandoArticle();

  const clearInput = () => {
    document.getElementById('search').value = null;
  }
