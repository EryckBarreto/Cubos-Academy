const jwt = require('jsonwebtoken')
const pool = require ('../conexao')
const senhaJwt = require('../senhaJwt')

const verificarUsuarioLogado = async (req, res, next) => {

    const { authorization } = req.headers

	if (!authorization) {
		return res.status(401).json({message: 'Não autorizado'})
	}

	const token = authorization.split(' ')[1];

    try {
        const { id } = jwt.verify(token, senhaJwt)

        const { rows, rowCount } = await pool.query(`
            SELECT * FROM usuarios
            WHERE id = $1
        `, [id])

        if (rowCount < 1)  {
            return res.status(401).json({message: 'Não autorizado'})
        }

        req.usuario = rows[0]

        next()
    } catch (error) {
        return res.status(401).json({mensagem: 'Não autorizado'})
    }


}

module.exports = verificarUsuarioLogado;