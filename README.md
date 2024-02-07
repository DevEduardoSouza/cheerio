# Projeto de Scraping com Node.js

Este é um projeto simples de scraping em Node.js para extrair informações de uma página da web. Ele utiliza o pacote `axios` para fazer requisições HTTP e o pacote `cheerio` para analisar e manipular o HTML retornado.

## Funcionalidades

O projeto atual realiza as seguintes tarefas:

- Faz uma requisição HTTP para uma URL específica.
- Extrai informações específicas do HTML da página usando o Cheerio.
- Imprime os resultados no console ou salvar em csv.

## Requisitos

- Node.js instalado na máquina. [Instalar Node.js](https://nodejs.org/)

## Instalação

1. Clone este repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/DevEduardoSouza/web-scraping.git

2. Acesse o diretório do projeto:
      ```bash
        cd web-scraping

3. Instale as dependências do projeto:
      ```bash
        npm install
      
4. Acesse *data.js* e faça sua configuraçôes:
    ```js
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
              products: "",
              prices: "",
              description: "",
              img: "",
            },
          },
        ],
      },
    ];
    ```
      
5. Após a instalação, você pode executar o projeto com o seguinte comando:
      ```bash
        npm run dev



