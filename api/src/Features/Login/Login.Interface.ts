// Importação
import { RowDataPacket } from "mysql2";

// Inteface tabela Login
interface Login{
    codigo?: number,
    nome?: string,
    email?: string,
    senha?: string,
    token?: string,
    data_atualizacao?: Date,
    data_criacao?: Date
}

// Exportação
export { Login };