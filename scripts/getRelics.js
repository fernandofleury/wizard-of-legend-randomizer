const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://wizardoflegend.gamepedia.com/Relics');

  const initialTable = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.cargo-relic-table tbody tr')).reduce(
      (data, row) => {
        const cells = row.querySelectorAll('td');

        const [img, name, desc, type] = cells;
        const imgEl = img.querySelector('img');

        if (type.innerText.toLowerCase() !== 'cursed' && imgEl) {
          data.push({
            id: data.length,
            imageUrl: imgEl.src.replace('/thumb', '').replace('20px-', '128px-'),
            name: name.innerText,
            type: type.innerText.toLowerCase()
          });
        }

        return data;
      },
      []
    )
  );

  fs.writeFileSync(
    './fixtures/relics.json',
    JSON.stringify(initialTable, null, 2)
  );

  await browser.close();
})();
