// Importação
import { Request, Response } from "express";
import { QueryProduto as QUERY } from "./Produto.Query";
import { conexao } from "../../Config/DataBase/connection";
import { Produto as classItem } from "./Produto.Interface";
import logger from "../../Config/Log/logger";

// Controller
const ControllerProduto = {
    async GET_ALL(req: Request, res: Response): Promise<Response | void> {
        try {

            // Constantes
            const resultado: any = await conexao.executarQuery(QUERY.GET_ALL, []);

            // Imprimindo query
            logger.info(QUERY.GET_ALL);

            // Retorno com sucesso
            return res.status(200).json(resultado[0]);

        } catch (error: any) {

            // Retorno com erro
            logger.error(error);
            return res.status(500).json({ Erro: error.message });
        }
    },

    async GET_ID(req: Request, res: Response): Promise<Response | void> {
        try {

            // Constantes
            const codigo: number = Number(req.params.codigo);
            const resultado: any = await conexao.executarQuery(QUERY.GET_ID, [codigo]);

            // Imprimindo query
            logger.info(QUERY.GET_ID);

            // Retorno com sucesso
            return res.status(200).json(resultado[0]);

        } catch (error: any) {

            // Retorno com erro
            logger.error(error);
            return res.status(500).json({ Erro: error.message });
        }
    },

    async GET_NEXT(req: Request, res: Response): Promise<Response | void> {
        try {

            // Constantes
            const codigo: number = Number(req.params.codigo);
            const resultado: any = await conexao.executarQuery(QUERY.GET_NEXT, [codigo]);

            // Imprimindo query
            logger.info(QUERY.GET_NEXT);

            // Retorno com sucesso
            return res.status(200).json(resultado[0]);

        } catch (error: any) {

            // Retorno com erro
            logger.error(error);
            return res.status(500).json({ Erro: error.message });
        }
    },

    async GET_PREVIUS(req: Request, res: Response): Promise<Response | void> {
        try {

            // Constantes
            const codigo: number = Number(req.params.codigo);
            const resultado: any = await conexao.executarQuery(QUERY.GET_PREVIUS, [codigo]);

            // Imprimindo query
            logger.info(QUERY.GET_PREVIUS);

            // Retorno com sucesso
            return res.status(200).json(resultado[0]);

        } catch (error: any) {

            // Retorno com erro
            logger.error(error);
            return res.status(500).json({ Erro: error.message });
        }
    },

    async GET_PAGINATION(req: Request, res: Response): Promise<Response | void> {
        try {

            // Constantes
            const codigo: number = Number(req.params.codigo);
            const limite: number = Number(req.params.limite);
            const resultado: any = await conexao.executarQuery(QUERY.GET_PAGINATION, [codigo, limite]);

            // Imprimindo query
            logger.info(QUERY.GET_PAGINATION);

            // Retorno com sucesso
            return res.status(200).json(resultado[0]);

        } catch (error: any) {

            // Retorno com erro
            logger.error(error);
            return res.status(500).json({ Erro: error.message });
        }
    },

    async POST(req: Request, res: Response): Promise<Response | void> {
        try {

            // Constantes
            const form: classItem = req.body;

            // Removendo codigo, para evitar uptade de cadastra já existente
            form.codigo = undefined;
            form.data_atualizacao = new Date();
            form.data_criacao = new Date();

            const resultado = await conexao.executarQuery(QUERY.CREATE, form);

            // Imprimindo query
            logger.info(QUERY.CREATE);

            // Consulta o registro cadastrado
            const resultSetHeader: any = resultado[0];
            const register = await conexao.executarQuery(QUERY.GET_ID, [resultSetHeader.insertId]);

            // Retorno com sucesso
            return res.status(200).json(register[0]);

        } catch (error: any) {

            // Retorno com erro
            logger.error(error);
            return res.status(500).json({ Erro: error.message });
        }
    },

    async PUT(req: Request, res: Response): Promise<Response | void> {
        try {

            // Constantes
            const codigo: number = Number(req.params.codigo);
            const form: classItem = req.body;

            // Atualização de data atualização
            form.data_atualizacao = new Date();
            await conexao.executarQuery(QUERY.UPDATE, [form, codigo]);

            // Imprimindo Query
            logger.info(QUERY.UPDATE);

            // Consulta o registro cadastrado
            const register = await conexao.executarQuery(QUERY.GET_ID, [codigo]);

            // Retorno com sucesso
            return res.status(200).json(register[0]);

        } catch (error: any) {

            // Retorno com erro
            logger.error(error);
            return res.status(500).json({ Erro: error.message });
        }
    },

    async DELETE_ID(req: Request, res: Response): Promise<Response | void> {
        try {

            // Constantes
            const codigo: number = Number(req.params.codigo);

            // Consulta o registro cadastrado
            const register = await conexao.executarQuery(QUERY.GET_ID, [codigo]);

            // Deleta registro
            await conexao.executarQuery(QUERY.DELETE_ID, [codigo]);

            // Imprimindo Query
            logger.info(QUERY.DELETE_ID);

            // Retorno com sucesso
            return res.status(200).json(register[0]);

        } catch (error: any) {

            //Retornando erro
            logger.error(error);
            return res.status(500).json({ Erro: error.message });
        }
    }
};

export { ControllerProduto };