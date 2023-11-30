const express = require('express');
const app = express();
const port = 3000;
cosnt fetch = require('fetch');

app.get('/', (_, res)=> {
    res.send("API endpoint reached.");
});

app.listen(port, ()=> {
    console.log("Express app listening on port " + port);
});