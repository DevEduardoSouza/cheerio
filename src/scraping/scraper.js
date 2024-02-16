import * as cheerio from "cheerio";
import { initBrowser } from "../puppeteer/Puppeteer.js";
import { formatLink } from "../utils/utils.js";

const products = [];

export const scrapePage = async (data) => {
  const { name, linkBase, termOfSearch, amountPages } = data;
  const {
    products: listProducts,
    name: nameProduct,
    price: priceProduct,
    imgSrc: imgSrcSelector,
    link: linkProduct,
    frete: freteProduct,
    reviews: reviewsProduct,
  } = data.sectores;

  console.log(
    `Scaping iniciando no ${name} com termo ${termOfSearch}, buscando ${amountPages} páginas`
  );

  // Inicia o navegador com Puppeteer
  const page = await initBrowser();

  let link = formatLink(linkBase, termOfSearch);

  for (let i = 0; i < amountPages; i++) {
    link = formatLink(link, termOfSearch);
    console.log(link);

    await page.goto(link);

    // Extrai o HTML da página carregada com Puppeteer
    const htmlContent = await page.content();
    const $ = cheerio.load(htmlContent);

    $(listProducts).each((i, value) => {
      const title = $(value).find(nameProduct).text();
      const price = $(value).find(priceProduct).text();
      const img = $(value).find(imgSrcSelector).attr("data-src");

      const link = $(value).find(linkProduct).attr("href");
      const frete = $(value).find(freteProduct).text();
      const reviews = $(value).find(reviewsProduct).text();

      products.push({ title, price, img, link, frete, reviews });
    });
  }

  return products;
};
