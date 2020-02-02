const searchInput = document.getElementById('search');
const results = document.getElementById('articles');

let query = '';

let articles;

let fetchArticles;


fetchArticles = async () => {
  articles = await fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch', {
  }
  ).then(res => res.json())
};


const showArticles = async () => {
  results.innerHTML = '';

  await fetchArticles();

  const ul = document.createElement('ul');
  ul.classList.add('content');

  articles.forEach(article => {
    const li = document.createElement('li');
    const url = document.createElement('a');
    li.classList.add('content');
    url.classList.add('url');
    li.appendChild
  })
}

fetchArticles();


searchInput.addEventListener('input', e => {
  query = e.target.value;
  fetchArticles();
});


function pullRandoArticle() {
  var getRando = document.getElementById("rando");
  getRando.addEventListener("click", function () {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
}
pullRandoArticle();

const clearInput = () => {
  document.getElementById('search').value = null;
}
