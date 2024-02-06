import { scrapePage } from "./scraping/scraper.js";
import data from "./data/data.js";

const dataEcommerces = data[0].ecommerces[0];
console.log(dataEcommerces);

async function main() {
  try {
    const products = await scrapePage(dataEcommerces);
    console.log(products);
  } catch (error) {
    console.error("Erro no scraping:", error.msg);
  }
}

main();
