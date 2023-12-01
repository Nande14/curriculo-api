const pool = require('./connection');

const getAll = async () => {
    const { rows } = await pool.query('SELECT * FROM curriculo');
    return rows;
};

const createCurriculo = async (curriculo) => {
    const { nome, descricao, habilidades } = curriculo;

    const query = 'INSERT INTO curriculo(nome, descricao, habilidades) VALUES($1, $2, $3) RETURNING *';
    const { rows } = await pool.query(query, [nome, descricao, habilidades]);

    return { insertId: rows[0].id };
};

const deleteCurriculo = async (id) => {
    const { rows } = await pool.query('DELETE FROM curriculo WHERE id = $1 RETURNING *', [id]);
    return rows[0];
};

const updateCurriculo = async (id, curriculo) => {
    const { nome, descricao, habilidades } = curriculo;

    const query = 'UPDATE curriculo SET nome = $1, descricao = $2, habilidades = $3 WHERE id = $4 RETURNING *';
    const { rows } = await pool.query(query, [nome, descricao, habilidades, id]);

    return rows[0];
};

module.exports = {
    getAll,
    createCurriculo,
    deleteCurriculo,
    updateCurriculo,
};
