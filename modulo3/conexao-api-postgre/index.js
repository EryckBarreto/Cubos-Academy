const express = require('express');
const pool = require('./conexao')


const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const { pagina, porPagina } = req.query;
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

        // const query = `
        //     SELECT e.id AS empresaId, f.id AS filialId, e.nome, f.pais 
        //     FROM empresas e
        //     FULL JOIN filiais f
        //     ON e.id = f.empresa_id;
        // `

        const query = `
            SELECT * FROM pessoas 
            ORDER BY id ASC
            LIMIT $1 OFFSET $2;
            `
        const offset = pagina === 1 ? 0 : (pagina -1) * porPagina;

        const resultado = await pool.query(query, [porPagina, offset]);
        const result = {
            pagina,
            porPagina,
            total: resultado.rowCount,
            registros: resultado.rows
        }

        return res.json(result);
    } catch (error) {
        console.log(error.message);
    };

});

app.listen(3000);