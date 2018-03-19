// function getArticles() {
//   var query = "";
//   var content = [];
//   query = document.getElementById("search").value;
// fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=" +
//     query + "&gsrlimit=5&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max")
//     .then(function(resp) {
//       console.log(resp);
//       return resp.json();
//     })
//     .then(function(data) {
//       console.log(data);
//     });
//   var ul = document.createElement("ul");
//   document.querySelector("articles").appendChild(ul);
//   content.forEach(renderArticles);

//   function renderArticles(element, index, arr) {
//     var li = document.createElement("li");
//     li.setAttribute("class", "item");
//     ul.appendChild(li);
//     li.innerHTML = li.innerHTML + element;

//     var keyWasPressed = document.querySelectorAll(".icon");

//     keyWasPressed[0].addEventListener("keyup", function() {
//       getArticles();
//     });
//   }

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

function pullRandoArticle() {
  var getRando = document.getElementById("rando");
  getRando.addEventListener("click", function () {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
}

pullRandoArticle();
