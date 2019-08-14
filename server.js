import express from 'express';

const server = express();

server.get( '/', (req, res) => {
    res.send(`<h1>Hello World!!!</h1>`);
})

server.listen(4000, () => {
    console.log('listening on port 4000');
})