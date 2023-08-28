const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json('tudo certo')
});

app.listen(3000);