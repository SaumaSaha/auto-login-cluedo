const puppeteer = require("puppeteer");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: null,
    ignoreDefaultArgs: ["--enable-automation"],
  });

  browser.on("targetdestroyed", () => {
    console.log("Browser closed");
    browser.close();
  });

  const page = await browser.newPage();

  await page.goto(process.argv[2]);

  await delay(2000);

  await page.click("#host-game-btn");

  await delay(2000);

  await page.type("#host-game-input-name", process.argv[3]);

  await delay(2000);

  await page.click("#host-game-confirm-btn");
})();
