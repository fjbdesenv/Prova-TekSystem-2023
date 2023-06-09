// Importações
import doenv from "dotenv";
import logger from "../Log/logger";
import { createConnection, ConnectionOptions, Connection, QueryError } from "mysql2/promise";

doenv.config();

// Opçoes de conexão
const connectionOptions:ConnectionOptions = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE, 
    user: process.env.DB_USER,
    password: process.env.DB_PWD
};

function conectar (): Promise<Connection>{
    return createConnection(connectionOptions);
}

async function executarQuery(query: string, params: Array<string | number> | object){
    const conexao = await conectar();
    const result = conexao.query(query, params);
    desconectar(conexao);
    return result;
}

function desconectar(conexao: Connection){
    conexao.end((error:QueryError) =>{
        logger.error(error.message);
        return error;
    });
}

const conexao = {
    conectar,
    executarQuery,
    desconectar
}

export { conexao };