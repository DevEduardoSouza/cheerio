import * as cheerio from "cheerio";

const html = `

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <h1>Título</h1>
      <div id="primeira">Com Lá  id</div>
      <div class="segunda">Com Class</div>
    </div>
  </body>
</html>

`;

const $ = cheerio.load(html);

// Retornando o html
// console.log($.text());

// Transforma o html em um objeto
// const dados = $("*");
// console.log(dados);

// Coletar texto no HTML
// const textos = $("*").text();
// console.log(textos);

// Usar um seletor
const seletorID = $("#primeira").text();
console.log(seletorID);
