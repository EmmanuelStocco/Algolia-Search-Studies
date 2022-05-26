const axios = require('axios');



axios
  .get('')
  .then(res => {
      
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
 