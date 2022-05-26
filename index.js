const express = require('express');

const app = express();

/**
 * Get
 * Pòst
 * Put
 * Delete
 * Patch - Altera uma info especifica
 * */

app.get('/courses', (request, response) => {
    return response.json([])
})



app.listen(3000);