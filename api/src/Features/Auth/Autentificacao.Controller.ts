// Importação
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import { QueryAutentificacao as QUERY } from "./Autentificacao.Query";
import { QueryLogin } from "../Login/Login.Query";
import { conexao } from "../../Config/DataBase/connection";
import { Autentificacao as classItem } from "./Autentificacao.Interface";
import { Login } from "../Login/Login.Interface";
import logger from "../../Config/Log/logger";

dotenv.config();

// Controller
const ControllerAutentificacao = {
    async AUTH(req: Request, res: Response): Promise<Response | void> {
        try {

            // constantes
            const form: classItem = req.body;
            let token: string = "";

            // Consulta de dados no banco
            const resultado: any = await conexao.executarQuery(QUERY.GET_AUTH, [form.email, form.senha]);

            // Imprimindo query
            logger.info(QUERY.GET_AUTH);

            const quantidadeRegistros: number = Number(resultado[0].length);
            const login: Login = resultado[0][0];

            // Imprimindo Query
            logger.info(QUERY.GET_AUTH);

            if (quantidadeRegistros > 0 && login) {
                // Gerando token
                // Token expira em 7 dias
                token = require('crypto').randomBytes(64).toString('hex');


                // // Atualiza token de login
                login.token = token;
                login.data_atualizacao = new Date();
                await conexao.executarQuery(QueryLogin.UPDATE, [login, login.codigo]);

                // Retorno com sucesso
                let message = { auth: true, token };
                logger.info(message);
                return res.status(200).json(message);

            } else {

                // Retorno com sucesso
                let message = { auth: false, token };

                logger.info(`auth: ${message.auth}`);
                return res.status(403).json(message);
            }

        } catch (error: any) {

            //Retornando erro
            logger.error(error.message);
            return res.status(500).json({ Erro: error.message });
        }
    },

    async VERIFY(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

        try {
            const VERSION = "/" + process.env.SERVER_VERSION;
            const ENVIRONMENT = "/" + process.env.SERVER_ENVIRONMENT;
            const URL_RAIZ = "/api" + VERSION + ENVIRONMENT;
            const paths = [URL_RAIZ + '/auth', URL_RAIZ + '/logout'];
            
            // Verifica se é uma rota sem autentificação
            if (paths.includes(req.path)) return next();


            const token: string | string[] | undefined = req.headers["x-access-token"];


            if (!token) {
                // Retorna status 401, caso não encontre o token
                return res.status(401).json({ auth: false, message: "Token was not informed, add 'x-access-token' header with token" });
            } else {

                // Verificando Token
                // Retorna dados de usuario
                const resultado: any = await conexao.executarQuery(QUERY.GET_TOKEN, [token]);
                const login: Login = resultado[0][0];

                if (login) {
                    // Validado com sucesso
                    return next();
                } else {
                    // Retorna status 401, quando o token não esta atualizdo
                    return res.status(401).json({ auth: false, message: "Token is no longer valid" });
                }
            }

        } catch (error: any) {

            //Retornando erro
            logger.error(error.message);
            return res.status(500).json({ Erro: error.message });
        }
    },

    async LOGOUT(req: Request, res: Response): Promise<Response | void> {
        try {
            // constantes
            const token: string | string[] | undefined = req.headers["x-access-token"];

            if (!token) {
                // Retorna status 401, caso não encontre o token
                let message = "Token was not informed, add 'x-access-token' header with token";

                logger.info(message)
                return res.status(401).json({ auth: false, message });
            } else {
                // Retorna dados de login de usuario
                await conexao.executarQuery(QUERY.DETETE_TOKEN, [token]);

                // Validado com sucesso
                let message = "Success";

                logger.info(message);
                return res.status(200).json({ auth: false, message });
            }

        } catch (error: any) {

            //Retornando erro
            logger.error(error.message);
            return res.status(500).json({ Erro: error.message });
        }
    }
}

export { ControllerAutentificacao };