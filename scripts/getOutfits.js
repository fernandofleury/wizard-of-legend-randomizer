const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://wizardoflegend.gamepedia.com/Outfits');

  const initialTable = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.wikitable tbody tr')).reduce(
      (data, row) => {
        const cells = row.querySelectorAll('td');

        if (!cells.length) {
          return data;
        }

        const [outfit] = cells;
        const img = outfit.querySelector('img');

        if (!img) {
          return data;
        }

        data.push({
          id: data.length,
          imageUrl: img.src.replace('/thumb', '').replace(/\/48px-.+$/, ''),
          name: outfit.innerText.trim()
        });

        return data;
      },
      []
    )
  );

  fs.writeFileSync(
    './fixtures/outfits.json',
    JSON.stringify(initialTable, null, 2)
  );

  await browser.close();
})();
