
function debounce(func, wait) {
      var timeout;

    return function () {
            var context = this;
            var args = arguments;
            clearTimeout(timeout);

        timeout = setTimeout(function () {
                  timeout = null;
                  func.apply(context, args);
        }, wait);
    };
}

function makeTeaser(body, terms) {
  var TERM_WEIGHT = 40;
  var NORMAL_WORD_WEIGHT = 2;
  var FIRST_WORD_WEIGHT = 8;
  var TEASER_MAX_WORDS = 10;

  var stemmedTerms = terms.map(function (w) {
    return elasticlunr.stemmer(w.toLowerCase());
  });
  var termFound = false;
  var index = 0;
  var weighted = [];

  var sentences = body.toLowerCase().split(". ");

  for (var i in sentences) {
    var words = sentences[i].split(" ");
    var value = FIRST_WORD_WEIGHT;

    for (var j in words) {
      var word = words[j];

      if (word.length > 0) {
        for (var k in stemmedTerms) {
          if (elasticlunr.stemmer(word).startsWith(stemmedTerms[k])) {
            value = TERM_WEIGHT;
            termFound = true;
          }
        }
        weighted.push([word, value, index]);
        value = NORMAL_WORD_WEIGHT;
      }

      index += word.length;
      index += 1;
    }

    index += 1;
  }

  if (weighted.length === 0) {
    return body;
  }

  var windowWeights = [];
  var windowSize = Math.min(weighted.length, TEASER_MAX_WORDS);

  var curSum = 0;
  for (var i = 0; i < windowSize; i++) {
    curSum += weighted[i][1];
  }
  windowWeights.push(curSum);

  for (var i = 0; i < weighted.length - windowSize; i++) {
    curSum -= weighted[i][1];
    curSum += weighted[i + windowSize][1];
    windowWeights.push(curSum);
  }

  var maxSumIndex = 0;
  if (termFound) {
    var maxFound = 0;
    for (var i = windowWeights.length - 1; i >= 0; i--) {
      if (windowWeights[i] > maxFound) {
        maxFound = windowWeights[i];
        maxSumIndex = i;
      }
    }
  }

  var teaser = [];
  var startIndex = weighted[maxSumIndex][2];
  for (var i = maxSumIndex; i < maxSumIndex + windowSize; i++) {
    var word = weighted[i];
    if (startIndex < word[2]) {
      teaser.push(body.substring(startIndex, word[2]));
      startIndex = word[2];
    }

    if (word[1] === TERM_WEIGHT) {
      teaser.push("<b>");
    }
    startIndex = word[2] + word[0].length;
    teaser.push(body.substring(word[2], startIndex));

    if (word[1] === TERM_WEIGHT) {
      teaser.push("</b>");
    }
  }
  teaser.push("…");
  return teaser.join("");
}

function formatSearchResultItem(item, terms) {
  return (
    `<article class='box'>` +
    `<emph>` +
    `<a class='link' class='link' href='${item.ref}'>${item.doc.title}</a>` +
    `</emph>` +
    `<div class='content mt-2'>` +
    `${makeTeaser(item.doc.body, terms)}` +
    `<a class='read-more' href='${item.ref}'>` +
    `Read More` +
    `</a>` +
    `</div>` +
    `</article>`
  );
}

function search() {
  console.log("Actually search");
  var $searchInput = document.getElementById("search");
  var currentTerm = "";
  var index = elasticlunr.Index.load(window.searchIndex);
  var $searchResults = document.querySelector(".search-results");
  var $searchResultsItems = document.querySelector(".search-results__items");
  var MAX_ITEMS = 10;

  var options = {
    bool: "AND",
    fields: {
      title: { boost: 2 },
      body: { boost: 1 },
    },
  };

  var term = $searchInput.value.trim();
  // TODO: actually store current term, so keyup on shift doesn't trigger a
  // new search, and simultaneously when "search" is triggered by hitting
  // the 'x' in the search bar, we clear the search results.
  // if (term === currentTerm || !index) {
  //   return;
  // }
  $searchResults.style.display = term === "" ? "none" : "block";
  $searchResultsItems.innerHTML = "";
  if (term === "") {
    return;
  }

  var results = index.search(term, options);
  if (results.length === 0) {
    $searchResults.style.display = "none";
    return;
  }

  currentTerm = term;
  for (var i = 0; i < Math.min(results.length, MAX_ITEMS); i++) {
    var item = document.createElement("div");
    item.classList.add("mb-4");
    item.innerHTML = formatSearchResultItem(results[i], term.split(" "));
    $searchResultsItems.appendChild(item);
  }
}

$(document).ready(function () {
  var $searchInput = document.getElementById("search");
  $searchInput.addEventListener("keyup", debounce(search, 150));
  $searchInput.addEventListener("search", debounce(search, 150));
});
