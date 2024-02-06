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
          "https://lista.mercadolivre.com.br/{TERMO}_Desde_1_NoIndex_True",
        termOfSearch: "mesa",
        sectores: {
          products: "",
          prices: "",
          description: "",
          img: "",
        },
      },
    ],
  },
];

export default data;
