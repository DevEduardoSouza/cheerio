import * as fs from "fs";
import data from "../data/data.js";

const configs = data[0].ecommerces[0];

export const crud = {
  save: (data) => {
    console.log(configs);
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

    fs.writeFile(`${configs.termOfSearch}.csv`, csvContent, (err) => {
      if (err) {
        console.log("Erro ao salvar");
        return;
      }
      console.log("Saved!");
    });
  },
};
