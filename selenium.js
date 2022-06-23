const { Builder, Browser, By } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");
require("chromedriver");

module.exports = async function () {
  const opt = new Options();

  opt.addArguments("--headless");
  opt.addArguments(
    "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.124 Safari/537.36 Edg/102.0.1245.41"
  );
  const navegador = new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(opt)
    .build();
  try {
    await navegador.get(
      "https://www.terabyteshop.com.br/produto/11313/processador-amd-ryzen-5-3600-36ghz-42ghz-turbo-6-core-12-thread-cooler-wraith-stealth-am4"
    );
    const name = await navegador
      .findElement(By.className("tit-prod"))
      .getAttribute("innerHTML");
    return name;
  } catch (e) {
    console.log("error", e);
  } finally {
    await navegador.quit();
  }
};
