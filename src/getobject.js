const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");

dotenv.config();
const sub =
  (async () => {
    try {
      const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
      const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
      const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

      const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
      const index = client.initIndex(ALGOLIA_INDEX_NAME);
      console.log('GETOBJECTS');
      //console.log(index);



      //getall
      // index.search('', {
      // }).then(({ hits }) => {
      //   console.log(hits);
      // }).catch((error) => {
      //   console.log('error');
      //   console.log(error);
      // })


      // //getAll query
      // index.search('brazil', {
      // }).then(({ hits }) => {
      //   console.log(hits);
      // }).catch((error) => {
      //   console.log('error');
      //   console.log(error);
      // })


      //get mais de uma query (vai apresentar os obj que tenham brazil e café)
      // index.search(['brazil', 'café'], {
      //   // attributesToRetrieve: ['milho', 'path', 'description'],
      //   // hitsPerPage: 50,
      // }).then(({ hits }) => {
      //   console.log(hits);
      // });


      //get selecionando quais atributos de cada objeto devem ser retornados
      // index.search('', {
      //    attributesToRetrieve: ['path', 'description'],
      //    hitsPerPage: 50,
      // }).then(({ hits }) => {
      //   console.log(hits);
      // });


      //Config quais atributos de cada objeto NÃO devem ser retornados
      /**
       * @nota essa configuração é ignorado ao getar com chave Administrador
       */
      // index.setSettings({
      //   unretrievableAttributes: [
      //     'title'
      //   ]
      // }).then(() => {
      //   // done
      // });


      //Retornar atributos MENOS X SELECIONADO
      /**
       * @nota para configurar, você deve passar um - no atributo que não quer recuperar
       * @atenção só funciona retornando o que você quer com *
       */
      // index.search('', {
      //         attributesToRetrieve: ['*', '-title'],
      //         hitsPerPage: 50,
      //       }).then(({ hits }) => {
      //         console.log(hits);
      //       });


      //FILTRANDO pelo titulo
      // index.search('', {
      //   //filters:'_tags:Pré Plantio'
      //   filters: 'title:Elongação'
      // }).then(({ hits }) => {
      //   console.log(hits);
      // }).catch((error) => {
      //   console.log(error);
      // })


      //FILTRANDO por tudo exeto que tiver Path
      // index.search('', 
      // {
      //   filters: 'NOT path:germoplasma_e_biotecnologia'
      // }).then(({ hits }) => {
      //   console.log(hits);
      // }).catch((error) => {
      //   console.log(error);
      // })

      //RETORNAR Todos com marcação Brazil menos os coom title doenças
      // index.search('brazil',
      //   {
      //     filters: 'NOT title:Doenças'
      //   }).then(({ hits }) => {
      //     console.log(hits);
      //   }).catch((error) => {
      //     console.log(error);
      //   })

      //RETORNA TUDO do Brazil com title vegetativo e que não tenha id soja_vegetativo
      /**
       * @importante os filtros são diretamente ligados e respeitam estritamente as configs da plataforma algolia
       * ou devem ser passadas essas configs via API 
       * ou configuradas diretamente dentro da conta algolia
       * somente dados como title vem padrão para filtragem
       */
      //   index.search('brazil',
      //     {
      //       filters: 'title:Vegetativo AND NOT id:soja_vegetativo'
      //     }).then(({ hits }) => {
      //       console.log(hits);
      //     }).catch((error) => {
      //       console.log(error);
      //     })

      //   } catch (error) {
      // }


      //MANIPULAR atriputos com espaço
      //    index.search('brazil',
      //     {
      //       filters: 'categoryCLASS:"Jornada Milho"'
      //     }).then(({ hits }) => {
      //       console.log(hits);
      //     }).catch((error) => {
      //       console.log(error);
      //     })

      //   } catch (error) {
      // }


      index.search('',
        {
          
        }).then(({ hits }) => {
          console.log(hits);
        }).catch((error) => {
          console.log(error);
        })

    } catch (error) {
    }


  })();