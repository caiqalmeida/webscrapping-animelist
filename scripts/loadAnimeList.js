let animeList = [];

async function loadAnimeList() {
  const response = await fetch("./animesList.json");
  const data = await response.json();
  animeList = data;

  displayAnimeList(animeList);
}

loadAnimeList();
