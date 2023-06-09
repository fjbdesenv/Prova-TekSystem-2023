// Importação
import { Router } from "express";
import { ControllerCategoria } from "./Categoria.Controller";

// Constantes
const RouterCategoria:Router = Router();
const ROUTER_NAME = "/categoria";

// Mapeamento de rotas
RouterCategoria.get(ROUTER_NAME, ControllerCategoria.GET_ALL);
RouterCategoria.post(ROUTER_NAME, ControllerCategoria.POST);
RouterCategoria.put(ROUTER_NAME + "/:codigo", ControllerCategoria.PUT);
RouterCategoria.get(ROUTER_NAME + "/:codigo", ControllerCategoria.GET_ID);
RouterCategoria.get(ROUTER_NAME + "/next/:codigo", ControllerCategoria.GET_NEXT);
RouterCategoria.get(ROUTER_NAME + "/previus/:codigo", ControllerCategoria.GET_PREVIUS);
RouterCategoria.get(ROUTER_NAME + "/pagination/:codigo/:limite", ControllerCategoria.GET_PAGINATION);
RouterCategoria.delete(ROUTER_NAME + "/:codigo", ControllerCategoria.DELETE_ID);

// Exportação
export { RouterCategoria };