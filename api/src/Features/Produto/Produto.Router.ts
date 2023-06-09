// Importação
import { Router } from "express";
import { ControllerProduto } from "./Produto.Controller";

// Constantes
const RouterProduto:Router = Router();
const ROUTER_NAME = "/produto";

// Mapeamento de rotas
RouterProduto.get(ROUTER_NAME, ControllerProduto.GET_ALL);
RouterProduto.post(ROUTER_NAME, ControllerProduto.POST);
RouterProduto.put(ROUTER_NAME + "/:codigo", ControllerProduto.PUT);
RouterProduto.get(ROUTER_NAME + "/:codigo", ControllerProduto.GET_ID);
RouterProduto.get(ROUTER_NAME + "/next/:codigo", ControllerProduto.GET_NEXT);
RouterProduto.get(ROUTER_NAME + "/previus/:codigo", ControllerProduto.GET_PREVIUS);
RouterProduto.get(ROUTER_NAME + "/pagination/:codigo/:limite", ControllerProduto.GET_PAGINATION);
RouterProduto.delete(ROUTER_NAME + "/:codigo", ControllerProduto.DELETE_ID);

// Exportação
export { RouterProduto };