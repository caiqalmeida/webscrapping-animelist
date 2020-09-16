function displayAnimeList(array) {
  const animeList = array
    .map(
      (element) => `
    <li class="card" data-number="${element.number}">
      <div class="card__container">
        <p class="card__title">${element.title}</p>
        <a class="card__link" target="_blank" href="${element.href}">
          <img class="card__img" src="${element.imgSrc}">
          <div class="card__hover">
            <img src="assets/images/link.svg">
            <img class="myanimelist-logo" src="assets/images/myanimelist.png" >
          </div>
        </a>
        <div class="card__score">
          <img card__score__img src="assets/images/stars.svg" >
          <span>${element.score}</span> 
        </div>
      </div>
    </li>
    `
    )
    .join("");

  document.querySelector("main").innerHTML = animeList;
}
