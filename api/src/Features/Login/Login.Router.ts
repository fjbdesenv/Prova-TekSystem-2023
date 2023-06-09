// Importação
import { Router } from "express";
import { ControllerLogin } from "./Login.Controller";

// Constantes
const RouterLogin:Router = Router();
const ROUTER_NAME = "/login";

// Mapeamento de rotas
RouterLogin.get(ROUTER_NAME, ControllerLogin.GET_ALL);
RouterLogin.post(ROUTER_NAME, ControllerLogin.POST);
RouterLogin.put(ROUTER_NAME + "/:codigo", ControllerLogin.PUT);
RouterLogin.get(ROUTER_NAME + "/:codigo", ControllerLogin.GET_ID);
RouterLogin.get(ROUTER_NAME + "/next/:codigo", ControllerLogin.GET_NEXT);
RouterLogin.get(ROUTER_NAME + "/previus/:codigo", ControllerLogin.GET_PREVIUS);
RouterLogin.delete(ROUTER_NAME + "/:codigo", ControllerLogin.DELETE_ID);

// Exportação
export { RouterLogin };