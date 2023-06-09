const TABLE = {
    NAME: "login",
    FIELDS: ['codigo', 'nome', 'email', 'senha', 'token', 'data_atualizacao', 'data_criacao'],
    PRIMARY_FIELD: 'codigo'
};

const GET_AUTH = `SELECT
    codigo   
FROM ${TABLE.NAME}
WHERE
    email = ?
    AND senha = ?;`;


const GET_TOKEN = `SELECT
    token   
FROM ${TABLE.NAME}
WHERE
    TOKEN = ?;`;

const DETETE_TOKEN = `UPDATE ${TABLE.NAME} SET token = '' WHERE token = ?;`;

// Query de consulta de Login
const QueryAutentificacao = {
    GET_AUTH,
    DETETE_TOKEN,
    GET_TOKEN
}

 // Exportação
export { QueryAutentificacao };