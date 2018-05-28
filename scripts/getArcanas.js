const puppeteer = require('puppeteer');
const fs = require('fs');

const parseInitialTable = ({ basic, dash, standard, signature }) => ({
  basic,
  dash,
  standard: [
    ...standard,
    ...signature.map(({ id, name, imageUrl }) => ({
      id: standard.length + id,
      name,
      imageUrl,
      type: 'standard'
    }))
  ],
  signature
});

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://wizardoflegend.gamepedia.com/Arcana');

  const initialTable = await page.evaluate(() =>
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
            imageUrl: img.querySelector('img').src.replace('20', '128'),
            name: name.innerText,
            type: type.innerText.toLowerCase()
          }
        ];

        return data;
      },
      { basic: [], dash: [], standard: [], signature: [] }
    )
  );

  const parsedTable = parseInitialTable(initialTable);

  fs.writeFileSync(
    './fixtures/arcanas.json',
    JSON.stringify(parsedTable, null, 2)
  );

  await browser.close();
})();
