const puppeteer = require("puppeteer");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
  });

  browser.on("targetdestroyed", () => {
    console.log("Browser closed");
    browser.close();
  });

  const page = await browser.newPage();

  await page.goto("http://localhost:8000");

  await page.setViewport({ width: 1792, height: 920, isLandscape: true });

  await delay(2000);

  await page.click("#join-game-btn");

  await delay(2000);

  await page.type("#join-game-input-name", process.argv[2]);

  await page.click("#join-game-confirm-btn");
})();
