const express = require('express');
const pool = require('./conexao')


const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    try {

        // const query = 'SELECT * FROM empresas WHERE nome = $1 or nome = $2'
        // const params = ['Google', 'Facebook']

        // const query = 'UPDATE empresas SET site = $1 WHERE id = $2'
        // const params = ['www.cakewalk.com', 1];

        // const query = `
        //     SELECT empresas.id AS empresaId, filiais.id AS filialID, empresas.nome, filiais.pais, pessoas.nome AS funcionario 
        //     FROM empresas
        //     INNER JOIN filiais
        //     ON empresas.id = filiais.empresa_id
        //     JOIN pessoas ON pessoas.empresa_id = empresas.id;
        // `

        // const query = `
        //     SELECT e.id AS empresaId, f.id AS filialId, e.nome, f.pais 
        //     FROM empresas e
        //     LEFT JOIN filiais f
        //     ON e.id = f.empresa_id;
        // `

        const query = `
            SELECT e.id AS empresaId, f.id AS filialId, e.nome, f.pais 
            FROM empresas e
            FULL JOIN filiais f
            ON e.id = f.empresa_id;
        `

        const resultado = await pool.query(query);

        return res.json(resultado.rows);
    } catch (error) {
        console.log(error.message);
    };

});

app.listen(3000);