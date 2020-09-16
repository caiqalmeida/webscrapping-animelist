const searchInput = document.querySelector(".header__search__input");

searchInput.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase();

  if (searchValue != "") {
    const filteredAnimes = animeList.filter((anime) => {
      return anime.title.toLowerCase().includes(searchValue);
    });

    displayAnimeList(filteredAnimes);
  } else {
    displayAnimeList(animeList);
  }
});
