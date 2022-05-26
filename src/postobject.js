//const arrayLISTAlgoliaOBJCT = require('../database/database') 

// Install the API client: https://www.algolia.com/doc/api-client/getting-started/install/javascript/?client=javascript
const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");
const { stringify } = require("uuid");
const schedule = require('node-schedule');

dotenv.config();

// Get your Algolia Application ID and (admin) API key from the dashboard: https://www.algolia.com/account/api-keys
// and choose a name for your index. Add these environment variables to a `.env` file:
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

// Start the API client
// https://www.algolia.com/doc/api-client/getting-started/instantiate-client-index/
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

// Create an index (or connect to it, if an index with the name `ALGOLIA_INDEX_NAME` already exists)
// https://www.algolia.com/doc/api-client/getting-started/instantiate-client-index/#initialize-an-index
const index = client.initIndex(ALGOLIA_INDEX_NAME);



//DADOS QUE VIRÃO DO FIREBASE
const arrayLISTAlgoliaOBJCT = [{}]

//MONTAGEM DE DADOS PARA ALGOLIA
const arrayMutado = arrayLISTAlgoliaOBJCT.map((e, index) => {
  let title = e.title
  let items = e.items
  let alldataImportant = {
    title,
    items
  }
  return alldataImportant;
}) 


//array teste update
const newObject = { objectID: 9, name: "Test4" };

//add post por periodo
//schedule.scheduleJob('*/10 * * * * *', () => { 
  index
    .saveObjects([newObject], {
      autoGenerateObjectIDIfNotExist: true
    })
    //.saveObjects(arrayObject)
    // Wait for the indexing task to complete
    // https://www.algolia.com/doc/api-reference/api-methods/wait-task/
    .wait()
    .then((response) => {
      console.log(response);
      // Search the index for "Fo"
      // https://www.algolia.com/doc/api-reference/api-methods/search/
      index.search("Teste").then((objects) => console.log(objects)).catch((error) => console.log(error));
    })
    .catch((error) => {
      console.log('deu ruim');
      console.log(error);
    });

//})


