import * as cheerio from "cheerio";
import { getPage } from "../http/http.js";
import { initBrowser } from "../puppeteer/Puppeteer.js";

const products = [];

const formatLink = (link, therm) => {
  link = link.replace(/{TERMO}/g, therm);

  if (link.includes("{PAGE}")) {
    return link.replace(/{PAGE}/g, "1");
  }

  let index = Number(link.match(/\d+/g));
  index += 49;

  return link.replace(/\d+/g, index);
};

export const scrapePage = async (data) => {
  const { name, linkBase, termOfSearch } = data;
  const {
    products: listProducts,
    name: nameProduct,
    price: priceProduct,
    imgSrc: imgSrcSelector,
    link: linkProduct,
    frete: freteProduct,
    reviews: reviewsProduct,
  } = data.sectores;

  console.log(`Scaping iniciando no ${name} com termo ${termOfSearch}`);

  let link = formatLink(linkBase, termOfSearch);
  console.log(link);

  // Inicia o navegador com Puppeteer
  const page = await initBrowser();
  await page.goto(link);

  // Extrai o HTML da página carregada com Puppeteer
  const htmlContent = await page.content();
  const $ = cheerio.load(htmlContent);

  // cheerio
  // const html = await getPage(link);
  // const $ = cheerio.load(html);

  $(listProducts).each((i, value) => {
    const title = $(value).find(nameProduct).text();
    const price = $(value).find(priceProduct).text();
    const img = $(value).find(imgSrcSelector).attr("data-src");


    const link = $(value).find(linkProduct).attr("href");
    const frete = $(value).find(freteProduct).text();
    const reviews = $(value).find(reviewsProduct).text();

    products.push({ title, price, img, link, frete, reviews });
  });

  return products;
};
