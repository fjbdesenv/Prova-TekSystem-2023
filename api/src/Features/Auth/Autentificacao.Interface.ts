// Importação
import { RowDataPacket } from "mysql2";

// Inteface consulta, tabela USUARIO
interface Autentificacao {
    codigo?: number,
	nome?: string,
    email?: number,
    senha?: string,
    data_atualizacao?: Date,
    data_criacao?: Date
}

// Exportação
export { Autentificacao };