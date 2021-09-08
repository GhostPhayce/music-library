const express = require('express');
const artistRouter = require('./routes/artist');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({ result: `Hello World`});
});

app.use('/artist', artistRouter);

module.exports = app;
