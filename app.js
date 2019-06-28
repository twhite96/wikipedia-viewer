function getArticles() {
  // Can't use let here and even var won't work; its scoped to this block
  // May need query to be global for now
  let query = '';
  let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=' + `${query}` + '&gsrlimit=5&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max';
  const input = document.querySelector('input');
  const search = document.getElementById('search');

  // Function is alllll kinds of wrong here
  // Why async await here?
  async function instantSearch(event) {
    // This is wrong
    query = search.value;
    search.textContent += `${event.code}`;
    console.log(json);
    // You're fetching a URL that is assigned to and scoped to
    // another function Fix this!
    return await fetch(url).then(response => response.json());
  }
  input.addEventListener('keyup', instantSearch);
}

// checkout the jQuery on master branch
// Instead of the html jQuery function we could use
// document.getElementById("some id").appendChild('some html')

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
