# freeCodeCamp Wikipedia Viewer Project

> An original app written in jQuery AJAX, refactored to use fetch and modern JavaScript APIs


 [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp; &nbsp; [![forthebadge](https://forthebadge.com/images/badges/designed-in-etch-a-sketch.svg)](https://forthebadge.com) &nbsp; &nbsp;
 [![Shields](https://img.shields.io/badge/Status-WIP-%2306d7d9)](https://img.shields.io/badge/Status-WIP-%2306d7d9)


## 👆 First Iteration

The first iteration was plain old jQuery using the `getJSON` method in an `AJAX` call:

```js
$(document).ready(function () {
  var query = "";
  var url = "";

  $("#search").keyup(function () {
    query = $("#search").val();
    url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      query +
      "&format=json&callback=?";
    $.getJSON(url, function (data) {
      $("#articles").html("");
      for (i = 0; i < data[1].length; i++) {
        $("#articles").append(
          "<div id=content><a href=" +
          data[3][i] +
          " ><h2>" +
          data[1][i] +
          "</h2><p>" +
          data[2][i] +
          "</p></a></div>"
        );
      }
    });
  });
});
```

This is fine, and it works, but it is really just *jQuery spaghetti code* and I really wanted to refactor it.

## 💪 Motivation

Besides the fact that this code is *extremely brittle* I wanted to challenge myself by refactoring the app to use modern JavaScript and newer web APIs like `fetch` and promises.

To date, there have been several iterations, some more brittle than even the jQuery version.

For instance, this:

```js

function getArticles() {
  // Can't use let here and even var won't work; its scoped to this block
  // May need query to be global for now
  let query = '';
  let url = '/* API */
  `${query}` +
  '/* end of query string */';
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
```

I wrote this code sometime last year and before that was even worse. I don't know what I was trying to accomplish in either of these instances but I have grown up since then.

<p align="center">
  <a href="https://github.com/twhite96/wikipedia-viewer/blob/15b03bc0bcec0ad7470d87a435abe66ae5d9924c/app.js">
    <img src="https://res.cloudinary.com/thatmacnerd/image/upload/c_scale,h_419/v1581383422/this-code-written-last-month-i-have-no-memory-of-42058109.png" alt="comment your code" />
  </a>
</p>

## 🕐 Current Iteration

You can follow along on the [refactor-to-fetch branch](https://github.com/twhite96/wikipedia-viewer/blob/refactor-to-fetch/app.js).
