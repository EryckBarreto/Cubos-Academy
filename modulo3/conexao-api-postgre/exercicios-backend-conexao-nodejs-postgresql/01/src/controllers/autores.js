const pool = require("../connection");

const cadastrarAutor = async (req, res) => {
    const { nome, idade } = req.body;

    if (!nome) {
        return res.status(400).json({mensagem: 'O campo nome é obrigatório'})
    };

    try {
        const query = `
            INSERT INTO autores (nome, idade)
            VALUES ($1, $2) RETURNING *
        `
      const { rows } = await pool.query(query, [nome, idade])
      
      return res.status(201).json(rows[0])
    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do servidor'})
    }

};

const obterAutor = async (req, res) => {
    const { id } = req.params

    try {  
        const query = `
            SELECT a.id, a.nome, a.idade, l.id as livro_id, l.nome as livro_nome,
            l.genero as livro_genero, l.editora as livro_editora, 
            l.data_publicacao as livro_data_publicacao
            FROM autores a left join livros l
            ON a.id = l.autor_id
            WHERE a.id = $1
        `

        const { rowCount, rows } = await pool.query(query, [id])  
        
        if (rowCount === 0) {
            return res.status(404).json({mensagem: 'O autor não existe'})
        };

        const livros = rows.map(livro => {
            return {
                id: livro.livro_id,
                nome: livro.livro_nome,
                genero: livro.livro_genero,
                editora: livro.livro_editora,
                data_publicacao: livro.livro_data_publicacao,
            }
        })

        const autor = {
            id: rows[0].id,
            nome: rows[0].nome,
            idade: rows[0].idade,
            livros
        }


        return res.json(autor);
        
    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do servidor'})  
    }
}

const cadastrarLivroAutor = async (req, res) => {
    const { id } = req.params
    const { nome, genero, editora, data_publicacao } = req.body;

    if (!nome) {
        return res.status(400).json({mensagem: 'O campo nome é obrigatório'})
    };

    try {
        const { rowCount, rows } = await pool.query('SELECT * FROM autores WHERE id = $1', [id])  
        
        if (rowCount === 0) {
            return res.status(404).json({mensagem: 'O autor não existe'})
        };

        const autor = rows[0]

        const query = `
            INSERT INTO livros (autor_id, nome, genero, editora, data_publicacao)
            VALUES ($1, $2, $3, $4, $5) RETURNING *
        `
        const livro = await pool.query(query, [autor.id, nome, genero, editora, data_publicacao]);
        
        return res.status(201).json(livro.rows[0])

    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do servidor'})  
    }

}   

module.exports = {
    cadastrarAutor,
    obterAutor,
    cadastrarLivroAutor
}