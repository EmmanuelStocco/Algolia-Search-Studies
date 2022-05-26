const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");

dotenv.config();

(async () => {
    try{
        const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
        const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
        const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

        const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
        const index = client.initIndex(ALGOLIA_INDEX_NAME);
        res = await index.search("");

        delete all
        await index.clearObjects().wait();

        //delete by id
        // objectIdtoDelete = 9
        // await index
        //     .deleteObject("")
        //     .wait();


    } catch(error){
        console.error(error);
    }
})();