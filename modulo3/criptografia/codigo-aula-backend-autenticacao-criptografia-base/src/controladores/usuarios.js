const pool = require('../conexao')
const bcrypt = require('bcrypt')

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {

        const senhaCriptografada = await bcrypt.hash(senha, 10)

        console.log(senhaCriptografada)

        const novoUsuario = await pool.query(`
        INSERT INTO usuarios (nome, email, senha)
        VALUES ($1, $2, $3) RETURNING id, nome, email`, 
        [nome, email, senhaCriptografada])

        return res.status(201).json(novoUsuario.rows[0]);

    } catch (error) {
		return res.status(500).json({mensagem: 'Erro interno do servidor'})

    }
}

module.exports = {
    cadastrarUsuario
}