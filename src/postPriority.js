const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");

dotenv.config();

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

const index = client.initIndex(ALGOLIA_INDEX_NAME);


index.setSettings({
    searchableAttributes: [
      'title',
      'director',
      'actor'
    ]
  }).then(() => {
    // done
  });

  
// index.setSettings({
//   attributesForFaceting: [
//     'description',
//     'teste'
//   ]
// }).then(()=>{
//   console.log('nois');
// })

// index.setSettings({
//   unretrievableAttributes: [
//     'total_number_of_sales'
//   ]
// }).then(() => {
//   // done
// });

// //Especifique alguns atributos para não recuperar
// index.setSettings({
//   attributesToRetrieve: [
//     '*',
//     '-SKU',
//     '-internal_desc'
//   ]
// }).then(() => {
//   // done
// });