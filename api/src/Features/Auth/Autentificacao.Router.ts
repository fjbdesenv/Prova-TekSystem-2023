// Importação
import { Router } from "express";
import { ControllerAutentificacao } from "./Autentificacao.Controller";

// Constantes
const RouterAutentificacao: Router = Router();
const ROUTER_AUTH = "/auth";
const ROUTER_LOGOUT = "/logout";

// Mapeamento de rotas
RouterAutentificacao.post(ROUTER_AUTH, ControllerAutentificacao.AUTH);
RouterAutentificacao.put(ROUTER_LOGOUT, ControllerAutentificacao.LOGOUT);

// Exportação
export { RouterAutentificacao };