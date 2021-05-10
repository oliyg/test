const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({ devtools: true });
  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.waitForSelector(
    "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input"
  );
  await page.type(
    "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input",
    "imagine dragon"
  );
  await page.click(
    "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b"
  );
};

main();
