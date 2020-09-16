const mainContainer = document.querySelector("main");
const sortByScoreBtn = document.querySelector(".order__btn--score");
const sortByScoreSvg = document.querySelector(".order__btn--score__svg");
const sortByTitleBtn = document.querySelector(".order__btn--title");
const sortByTitleSvg = document.querySelector(".order__btn--title__svg");

sortByScoreBtn.addEventListener("click", (e) => sortItems(e, animeList));

sortByTitleBtn.addEventListener("click", (e) => sortItems(e, animeList));

function sortItems(e, array) {
  mainContainer.classList.add("out");
  setTimeout(() => {
    const sortBy = e.target.getAttribute("data-order");
    sortBy == "title" ? array.sort(sortByTitle) : array.sort(sortByScore);
    displayAnimeList(animeList);
    mainContainer.classList.remove("out");
  }, 500);
}

function sortByScore(a, b) {
  sortByTitleSvg.classList.remove("active");
  sortByScoreSvg.classList.add("active");
  return b.score - a.score;
}

function sortByTitle(a, b) {
  sortByScoreSvg.classList.remove("active");
  sortByTitleSvg.classList.add("active");
  return a.number - b.number;
}
