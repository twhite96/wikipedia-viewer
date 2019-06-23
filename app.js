function getArticles() {
  let query = '';
  let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=' + `${query}` + '&gsrlimit=5&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max';
  const input = document.querySelector('input');
  const search = document.getElementById('search');

  async function instantSearch (event) {
    query = search.value;
    search.textContent += `${event.code}`;
    console.log(json);
    return await fetch(url).then(response => response.json());
  }
  input.addEventListener('keyup', instantSearch);
}

const clearInput = () => {
  document.getElementById('search').value = null;
}

getArticles();

function pullRandoArticle() {
  var getRando = document.getElementById("rando");
  getRando.addEventListener("click", function () {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
}
pullRandoArticle();
