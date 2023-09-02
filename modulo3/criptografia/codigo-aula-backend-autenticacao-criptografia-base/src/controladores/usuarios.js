const pool = require('../conexao')
const bcrypt = require('bcrypt')

const cadastrarUsuario = async (req, res) => {

    const { nome, email, senha } = req.body;

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const novoUsuario = await pool.query(`
        INSERT INTO usuarios (nome, email, senha)
        VALUES ($1, $2, $3) RETURNING id, nome, email`, 
        [nome, email, senhaCriptografada])

        return res.status(201).json(novoUsuario.rows[0]);

    } catch (error) {
		return res.status(500).json({mensagem: 'Erro interno do servidor'})
    }
}

const login = async (req, res) => {
    const { email, senha } = req.body

    try {
        const usuario = await pool.query(`
        SELECT * FROM usuarios
        WHERE email = $1`, [email])

        if (usuario.rowCount < 1) {
            return res.status(404).json({mensagem: 'Email ou senha inválidos'})
        }

        const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha)

        if (!senhaValida) {
            return res.status(400).json({mensagem: 'Email ou senha inválidos'})
        }

        return res.status(200).json('Usuário autenticado.')

    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do servidor'})

    }

}

module.exports = {
    cadastrarUsuario,
    login
}