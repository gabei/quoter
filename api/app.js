const express = require('express');
const app = express();
const port = 2000;
const  fetch = require('node-fetch')
const cors = require('cors');

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
    console.log(data);
    return data;
}


app.use(cors());

app.get('/quote', (_, res)=> {
    callAPI().then((data) => res.send(data));
});

app.listen(port, ()=> {
    console.log("Express app listening on port " + port);
});