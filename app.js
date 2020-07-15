/* Ripped all that copied code out, this is my stuff, by me.
Copying code is a quick and dirty way to get something going but if you don't understand why it works
why use it? This is my attempt at refactoring my wikipedia viewer to use modern web APIs */

// I need to target the input field in order for the oninput event handler to fire correctly.
let input = document.querySelector('input');
let query = document.getElementById('search').value;

// Since I will be typing in the input field and I want
// The text to be displayed while typing, I assigned the input variable
// to this nifty `oninput` event handler: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput
input.oninput = handleInput;
// console.log(displayResults());

// Here we can handle the event and display the query or search term with `handleInput` passing in the event, e
// and assigning its value to target.value
// This will display the value of the input, ie strings, to whatever container/form we have.
// The issue now is handling the event when we get a response back from the Fetch API.
// Want to move this handler inside the fetch call? Is that what it is?
// Struggling with what pattern to use.
function handleInput(e) {
   query.textContent = e.target.value;
}
let fetchResults = (handleInput) => {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${handleInput}`;
  fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const results = data.query.search;
  })
  .catch(() => console.log('An error occurred'));
}

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
