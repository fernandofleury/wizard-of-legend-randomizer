const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://wizardoflegend.gamepedia.com/Arcana');

  const arcanasTable = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll('.cargo-arcana-table tbody tr')
    ).reduce(
      (data, row) => {
        const cells = row.querySelectorAll('td');

        const [img, name, desc, ele, type] = cells;

        data[type.innerText.toLowerCase()] = [
          ...data[type.innerText.toLowerCase()],
          {
            id: data[type.innerText.toLowerCase()].length,
            imageUrl: img.querySelector('img').src,
            name: name.innerText
          }
        ];

        return data;
      },
      { basic: [], dash: [], standard: [], signature: [] }
    )
  );

  fs.writeFileSync('./fixtures/data.json', JSON.stringify(arcanasTable, null, 2));

  await browser.close();
})();
