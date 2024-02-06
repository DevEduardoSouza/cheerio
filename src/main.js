import { scrapePage } from "./scraping/scraper.js";
import data from "./data/data.js";
console.log(data);

const url = "https://www.magazineluiza.com.br/celulares-e-smartphones/l/te/";

async function main() {
  try {
    const products = await scrapePage(url);
    console.log(products);
  } catch (error) {
    console.error("Erro no scraping:", error.message);
  }
}

// main();
