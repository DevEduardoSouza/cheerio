import * as fs from "fs";
import data from "../data/data.js";
import { colors } from "../assets/colors.js";
"../results"
const configs = data[0].ecommerces[0];

export const db = {
  save: (data) => {
    const csvContent = `Image,Title,Price,Link,Frete,Reviews\n${data
      .map((item) => {
        const price = item.price.replace(",", ".");
        const img = `"${item.img}"`;
        const title = `"${item.title}"`;
        const link = `"${item.link}"`;
        const frete = `"${item.frete}"`;
        const reviews = `"${item.reviews}"`;

        return `${img},${title},${price},${link},${frete},${reviews}`;
      })
      .join("\n")}`;

    fs.writeFile(`src/results/${configs.termOfSearch}.csv`, csvContent, (err) => {
      if (err) {
        console.log(
          `${colors.redColor}Erro ao salvar o arquivo ${configs.termOfSearch}.csv em  "results/${configs.termOfSearch}.csv" ${colors.resetColor}\n${err}`
        );
        return;
      }
      console.log(
        `${colors.greenColor}Arquivo salvo com sucesso em results/${configs.termOfSearch}.csv${colors.resetColor}`
      );
    });
  },
};
