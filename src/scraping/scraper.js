import * as cheerio from "cheerio";
import { getPage } from "../http/http.js";

const formatLink = (link, therm) => {
  link = link.replace(/{TERMO}/g, therm);

  if (link.includes("{PAGE}")) {
    return link.replace(/{PAGE}/g, "1");
  }

  let index = Number(link.match(/\d+/g));
  index += 49;

  return link.replace(/\d+/g, index);
};

export const scrapePage = async ({ name, linkBase, termOfSearch }) => {
  console.log(`Scaping iniciando no ${name} com termo ${termOfSearch}`);

  let link = formatLink(linkBase, termOfSearch);
  console.log(link);

  const html = await getPage(link);
  console.log(html);

  // const $ = cheerio.load(html);
  // const products = [];

  // $(".sc-kTbCBX.ciMFyT").each((i, value) => {
  //   const linkProduct = $(value)
  //     .find("a[data-testid=product-card-container]")
  //     .attr("href");
  //   const imgSrc = $(value)
  //     .find(".sc-gZfzYS.kWXvSd img[data-testid=image]")
  //     .attr("src");
  //   const title = $(value).find(".availablePricesCard span").text();
  //   const price = $(value).find(".priceCard").text();

  //   products.push({ linkProduct, imgSrc, title, price });
  // });

  return products;
};
