import puppeteer from "puppeteer";
import { colors } from "../assets/colors.js";

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
    console.log(
      `${colors.greenColor}✅ Browser aberto com sucesso${colors.resetColor}`
    );
    const page = await browser.newPage();
    return page;
  } catch (error) {
    console.error(
      `${colors.redColor}❌ Erro ao abrir o navegador: ${error}${colors.resetColor}`
    );
  }
};
