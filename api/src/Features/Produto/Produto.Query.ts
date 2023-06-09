const TABLE = {
    NAME: "PRODUTO",
    FIELDS: ['codigo', 'codigo_categoria', 'nome', 'descricao', 'preco', 'imagem', 'data_atualizacao', 'data_criacao'],
    PRIMARY_FIELD: 'CODIGO'
};

const GET_ALL = `SELECT
    ${TABLE.FIELDS.join(', ')}    
FROM ${TABLE.NAME};`;

const GET_ID = `SELECT
    ${TABLE.FIELDS.join(', ')}
FROM ${TABLE.NAME}
WHERE ${TABLE.PRIMARY_FIELD} = ?;`;

const GET_NEXT = `SELECT
    ${TABLE.FIELDS.join(', ')}
FROM ${TABLE.NAME}
WHERE ${TABLE.PRIMARY_FIELD} > ? ORDER BY ${TABLE.PRIMARY_FIELD} ASC LIMIT 1;`;

const GET_PREVIUS = `SELECT
    ${TABLE.FIELDS.join(', ')}
FROM ${TABLE.NAME}
WHERE ${TABLE.PRIMARY_FIELD} < ? ORDER BY ${TABLE.PRIMARY_FIELD} DESC LIMIT 1;`;

const GET_PAGINATION = `SELECT
    ${TABLE.FIELDS.join(', ')}
FROM ${TABLE.NAME}
WHERE ${TABLE.PRIMARY_FIELD} > ? ORDER BY ${TABLE.PRIMARY_FIELD} ASC LIMIT ?;`;

const CREATE = `INSERT INTO ${TABLE.NAME} SET ?;`;

const DELETE_ID = `DELETE FROM ${TABLE.NAME} WHERE ${TABLE.PRIMARY_FIELD} = ?;`;

const UPDATE = `UPDATE ${TABLE.NAME} SET ? WHERE ${TABLE.PRIMARY_FIELD} = ?;`;

// Query de consulta de Produto
const QueryProduto = {
    GET_ALL,
    GET_ID,
    GET_NEXT,
    GET_PREVIUS,
    GET_PAGINATION,
    DELETE_ID,
    CREATE,
    UPDATE,
}

 // Exportação
export { QueryProduto };