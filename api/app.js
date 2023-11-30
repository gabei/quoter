const express = require('express');
const app = express();
const port = 3000;
const  fetch = require('node-fetch')

require('dotenv').config();

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': process.env.API_KEY
    }
}

async function callAPI(){
    const response = await fetch(process.env.API_URL, options);
    const data = await response.json();
    return data;
}

callAPI();

app.get('/quote', (_, res)=> {
    res.send(callAPI);
});

app.listen(port, ()=> {
    console.log("Express app listening on port " + port);
});