const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function openChromeTest() {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  try {
    let options = new chrome.Options();
    let driver = await new Builder()
      .setChromeOptions(options)
      .forBrowser('chrome')
      .build();

    await driver.get('https://demoqa.com/');
    await driver.findElement(By.className('card')).click();

    // Elements Page
    await driver.findElement(By.id('item-1')).click();
    await sleep(1000);
    // Check Box
    await driver.findElement(By.css('label[for="tree-node-home"]')).click();
    await sleep(3000);

    // Radio Button Page
    await driver.findElement(By.id('item-2')).click();
    await driver.findElement(By.css('label[for="impressiveRadio"]')).click();
    await sleep(1000);
    await driver.findElement(By.css('label[for="yesRadio"]')).click();
  } catch (error) {
    console.log(error)
  }
})();
