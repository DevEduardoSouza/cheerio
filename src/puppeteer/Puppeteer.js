import puppeteer from "puppeteer";

const resetColor = "\x1b[0m";
const greenColor = "\x1b[32m";
const redColor = "\x1b[31m";

const puppeteerConfigs = {
  executablePath:
    "C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe",
  headless: true,
  timeout: 60000,
  defaultViewport: {
    width: 800,
    height: 600,
  },
};

export const initBrowser = async (url) => {
  try {
    const browser = await puppeteer.launch(puppeteerConfigs);
    console.log(`${greenColor}✅ Browser aberto com sucesso${resetColor}`);
    const page = await browser.newPage();
    return page;
  } catch (error) {
    console.error(
      `${redColor}❌ Erro ao abrir o navegador: ${error}${resetColor}`
    );
  }
};
