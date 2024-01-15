import * as cheerio from "cheerio";
import axios from "axios";

// URl -> para o site
const url = "https://www.magazineluiza.com.br/celulares-e-smartphones/l/te/";

//Pegar o html da página usando Axios
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter a página:", error.message);
    return null;
  }
}

// Pegar determinados dados do HTML
async function scrapePage(url) {
  const html = await fetchData(url);

  // Validar se o html existe
  if (!html) throw new Error("");

  const $ = cheerio.load(html);

  // Selecionar elementos
  $(".sc-kTbCBX.ciMFyT").each((i, value) => {
    const linkProduct = $(value)
      .find("a[data-testid=product-card-container]")
      .attr("href");
    const imgSrc = $(value)
      .find(".sc-gZfzYS.kWXvSd img[data-testid=image]")
      .attr("src");

    const title = $(value).find(".availablePricesCard span").text();
    const price = $(value).find(".priceCard").text();

    console.log(imgSrc);
  });

  
  // console.log(element);

  // const priceElement = $(
  //   "p[data-testid='price-value'].sc-kpDqfm.eCPtRw.sc-bOhtcR.dOwMgM"
  // );
  // const price = priceElement.text().trim();
  // console.log(price);

  // console.log($("div.productCard").text());
  // console.log($(".productCard").text());

  // console.log($("main").text());

  // $("main").each((i, value) => {
  //   console.log(value);
  //   // const title = $(value).find(".availablePricesCard span").text();
  //   // const price = $(value).find(".priceCard").text();
  //   // console.log(title, price);
  // });
}

scrapePage(url);
