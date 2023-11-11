const express = require ('express');
const server = express();

server.get('/', (req, res) => {
    res.send("Hola Mundo!");
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`servidor iniciado en http://localhost:${PORT}`);
});