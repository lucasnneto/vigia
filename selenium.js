const { Builder, Browser, By } = require("selenium-webdriver");
const { Options, ServiceBuilder } = require("selenium-webdriver/chrome");
const { urls } = require("./busca");
const market = require("./market");

module.exports = async function (item) {
  const elements = urls.filter((el) => el.item === item);
  const opt = new Options();

  opt.addArguments("--headless");
  opt.addArguments("--disable-gpu");
  opt.addArguments("--no-sandbox");
  opt.addArguments(
    "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.124 Safari/537.36 Edg/102.0.1245.41"
  );
  opt.setChromeBinaryPath(process.env.GOOGLE_CHROME_BIN);
  const serviceBuilder = new ServiceBuilder(process.env.CHROMEDRIVER_PATH);

  try {
    const values = await Promise.all(
      elements.map(async (el) => {
        const navegador = new Builder()
          .forBrowser(Browser.CHROME)
          .setChromeService(serviceBuilder)
          .setChromeOptions(opt)
          .build();
        const data = await navegador.get(el.url).then(async () => {
          return await market[el.market](navegador);
        });
        await navegador.quit();
        return { ...data, ...el };
      })
    );

    return values;
    // await navegador.get(
    //   "https://www.terabyteshop.com.br/produto/11313/processador-amd-ryzen-5-3600-36ghz-42ghz-turbo-6-core-12-thread-cooler-wraith-stealth-am4"
    // );
    // const name = await navegador
    //   .findElement(By.className("tit-prod"))
    //   .getAttribute("innerHTML");
    // return name;
  } catch (e) {
    console.log("error", e);
  }
};
