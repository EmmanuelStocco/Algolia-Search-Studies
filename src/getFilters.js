const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");

dotenv.config();
const sub =
    (async () => {
        try {
            // Algolia client credentials
            const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
            const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
            const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

            const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
            const index = client.initIndex(ALGOLIA_INDEX_NAME);

            // index.search('café', {
            //     filters: 'path:cafe_manej'
            // }).then(({ hits }) => {
            //     console.log(hits);
            // }).catch((error) => {
            //     console.log('error');
            //     console.log(error);
            // })

                  // index.search('', {
      //    attributesToRetrieve: ['path', 'description'],
      //    hitsPerPage: 50,
      // }).then(({ hits }) => {
      //   console.log(hits);
      // });

      index.search(['café', 'soja'], {
      attributesToRetrieve: ['milho', 'path', 'description'],
      unretrievableAttributes: [ //atributo não recuperar
          'description'
        ] 

      hitsPerPage: 50,
      }).then(({ hits }) => {
        console.log(hits);
      });

      // let res = await index.search("brazil", { 
      // });
      // console.log(res.hits); 
      // return res



      // let a = await index.search('café', {
      //   filters: 'path:cafe_manejo_da_broca_do_cafe'
      // }).then(({ hits }) => {
      //   console.log(hits);
      // }).catch((error) => {
      //   console.log('error');
      //   console.log(error);
      // })
 
      // index.search('', {
      //     filters: 'name: teste item 11'
      //   }).then(() => {
      //     console.log('ok');
      //   });

// //            Only "Motorola" smartphones
//             index.search(['café'], {  
//                 // searchParameters: {
//                 //     filters: 'NOT _tags:CTBCast'
//                 // }
//                 filters: 'NOT type:detail'
//             }).then(({ hits }) => {
//                 console.log(hits);
//             }).catch((error)=> {
//                 console.log(error);
//             });

            // index.instantsearch({
            //     searchParameters: {                     
            //             filters: 'NOT _tags:CTBCast'
            //     }
            // }).then(({ hits }) => {
            //     console.log(hits);
            // }).catch((error)=> {
            //     console.log(error);
            // });

 
            // Only "LG" or "Samsung" smartphones
            // index.search('brazil', {
            //     //filters: 'brand:LG OR brand:Samsung'
            //    // filters: 'title:"Manejo do Bicudo"'
            // }).then(({ hits }) => {
            //     console.log(hits);
            // });
 


            // // Everything but "Apple" smartphones
            // index.search('smartphone', {
            //     filters: 'NOT brand:Apple'
            // }).then(({ hits }) => {
            //     console.log(hits);
            // });


        } catch (error) {
        }
    })();