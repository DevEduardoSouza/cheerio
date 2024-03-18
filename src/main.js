import { scrapePage } from "./scraping/scraper.js";
import data from "./data/data.js";
import { db } from "./db/save.js";

const dataEcommerces = data[0].ecommerces[0];

async function main() {
  try {
    const products = await scrapePage(dataEcommerces);
    db.save(products);
  } catch (error) {
    console.error("Erro no scraping:", error);
  }
}

main();
