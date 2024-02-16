const data = [
  {
    ecommerces: [
      {
        name: "Mercado Livre",

        /** Padrão de link do mercado livre
         * {TERMO} -> termo de busca
         * {PAGE} -> page 1 = 1 à 48 , page 2 = 49 à 97  .....
         */
        linkBase:
          "https://lista.mercadolivre.com.br/{TERMO}_Desde_{PAGE}_NoIndex_True",
        termOfSearch: "mesa",
        sectores: {
          products: ".ui-search-result__wrapper",
          name: ".ui-search-item__title",
          price:
            "div.ui-search-result__content > div.ui-search-result__content-wrapper > div.ui-search-item__group.ui-search-item__group--price.ui-search-item__group--price-grid-container > div > div > div > span.andes-money-amount.ui-search-price__part.ui-search-price__part--medium.andes-money-amount--cents-superscript",
          description: "",
          imgSrc:
            "div.andes-carousel-snapped__controls-wrapper div.andes-carousel-snapped__slide img",
          link: ".ui-search-item__group__element.ui-search-link__title-card.ui-search-link",
          frete:
            "div.ui-search-result__content > div.ui-search-result__content-wrapper > div.ui-pb",

          reviews:
            "div.ui-search-result__content > div > div.ui-search-item__group.ui-search-item__group--title > div > span.andes-visually-hidden",
        },
        amountPages: 10,
      },
    ],
  },
];

export default data;
