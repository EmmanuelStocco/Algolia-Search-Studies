const express = require('express');;
const { v4: uuidv4 } = require('uuid'); //renomeu function

const app = express();
app.use(express.json());

 
app.get('/', (request, response) => { 
    return response.json('to aqui')
});


app.get('/novarota', (request, response) => { 
    return response.json('novarota')
});


app.listen(3000);