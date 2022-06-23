const { By } = require("selenium-webdriver");

async function terabyte(nav) {
  const name = await nav
    .findElement(By.className("tit-prod"))
    .getAttribute("innerHTML");
  const valor_vista = await nav
    .findElement(By.id("valVista"))
    .getAttribute("innerHTML");
  const valor_prazo = await nav
    .findElement(By.className("valParc"))
    .getAttribute("innerHTML");
  return { name, valor_vista, valor_prazo };
}
async function kabum(nav) {
  const name = await nav
    .findElement(By.xpath('//*[@id="__next"]/main/article/section/div[2]/h1'))
    .getAttribute("innerHTML");
  const valor_vista = await nav
    .findElement(By.className("finalPrice"))
    .getAttribute("innerHTML");
  const valor_prazo = await nav
    .findElement(By.className("regularPrice"))
    .getAttribute("innerHTML");
  return { name, valor_vista, valor_prazo };
}
async function pichau(nav) {
  const name = await nav
    .findElement(By.xpath('//*[@id="__next"]/main/div[2]/div/div[2]/h1'))
    .getAttribute("innerHTML");
  const valor_vista = await nav
    .findElement(
      By.xpath(
        '//*[@id="__next"]/main/div[2]/div/div[2]/div[2]/div[1]/div/div[1]/div[2]/div'
      )
    )
    .getAttribute("innerHTML");
  const valor_prazo = await nav
    .findElement(
      By.xpath(
        '//*[@id="__next"]/main/div[2]/div/div[2]/div[2]/div[1]/div/div[3]/div[2]/div[1]'
      )
    )
    .getAttribute("innerHTML");
  return { name, valor_vista, valor_prazo };
}
async function amazon(nav) {
  const name = await nav
    .findElement(By.id("productTitle"))
    .getAttribute("innerHTML");
  const valor_vista = await nav
    .findElement(
      By.xpath(
        '//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]'
      )
    )
    .getAttribute("innerHTML");
  // await nav.findElement(By.xpath('//*[@id="InstallmentCalculatorTrigger"]/a')).click();

  const valor_prazo = await nav
    .findElement(
      By.xpath('//*[@id="InstallmentCalculatorTable"]/tbody/tr[2]/td[3]')
    )
    .getAttribute("innerHTML");
  return { name, valor_vista, valor_prazo };
}
async function mercadolivre(nav) {
  const name = await nav
    .findElement(By.css(".ui-pdp-header__title-container .ui-pdp-title"))
    .getAttribute("innerHTML");
  const vista = await nav
    .findElement(By.className("andes-money-amount__fraction"))
    .getAttribute("innerHTML");
  const prazo1 = await nav
    .findElement(
      By.css(".ui-pdp-price__subtitles p .andes-money-amount__fraction")
    )
    .getAttribute("innerHTML");
  const prazo2 = await nav
    .findElement(
      By.css(".ui-pdp-price__subtitles p .andes-money-amount__cents")
    )
    .getAttribute("innerHTML");
  const prazo0 = await nav
    .findElement(By.css(".ui-pdp-price__subtitles p"))
    .getText();
  const multiply = prazo0.split("\n")[0].replace("em ", "").replace("x", "*");
  const calc = eval(multiply + prazo1 + "." + prazo2);
  return {
    name,
    valor_vista: "R$ " + vista,
    valor_prazo: "R$ " + calc,
  };
}

module.exports = { terabyte, kabum, pichau, mercadolivre, amazon };
