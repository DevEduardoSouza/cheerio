import * as cheerio from "cheerio";
import { getPage } from "../http/http.js";

export const scrapePage = async () => {
  const html = await getPage(url);

  const $ = cheerio.load(html);
  const products = [];

  $(".sc-kTbCBX.ciMFyT").each((i, value) => {
    const linkProduct = $(value)
      .find("a[data-testid=product-card-container]")
      .attr("href");
    const imgSrc = $(value)
      .find(".sc-gZfzYS.kWXvSd img[data-testid=image]")
      .attr("src");
    const title = $(value).find(".availablePricesCard span").text();
    const price = $(value).find(".priceCard").text();

    products.push({ linkProduct, imgSrc, title, price });
  });

  return products;
};
