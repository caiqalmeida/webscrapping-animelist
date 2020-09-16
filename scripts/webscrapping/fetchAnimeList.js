const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://myanimelist.net/animelist/AkitaOnRails?status=2");

  const animesList = await page.evaluate(() => {
    // Number
    const nodeListNumber = document.querySelectorAll("td.data.number");
    const arrayListNumber = [...nodeListNumber];
    const arrayNumber = arrayListNumber.map((number) => ({
      number: number.innerText,
    }));

    // Images
    const nodeListImg = document.querySelectorAll(".list-item img");
    const arrayListImg = [...nodeListImg];
    const arrayImg = arrayListImg.map((img) => ({ imgSrc: img.src }));

    // Scores
    const nodeListScore = document.querySelectorAll(".score-label");
    const arrayListScore = [...nodeListScore];
    const arrayScore = arrayListScore.map((score) => ({
      score: Math.floor(score.innerText),
    }));

    // Titles
    const nodeListTitle = document.querySelectorAll(
      "tbody.list-item td.data.title a.link.sort"
    );
    const arrayListTitle = [...nodeListTitle];
    const arrayTitle = arrayListTitle.map((title) => ({
      href: title.href,
      title: title.innerText,
    }));

    let animesList = [];

    for (let i = 0; i < arrayNumber.length; i++) {
      animesList.push({
        ...arrayNumber[i],
        ...arrayImg[i],
        ...arrayScore[i],
        ...arrayTitle[i],
      });
    }

    return animesList;
  });

  fs.writeFile(
    "animesList.json",
    JSON.stringify(animesList, null, 2),
    (err) => {
      if (err) throw new Error("Can't fetch");
    }
  );

  await browser.close();
})();
