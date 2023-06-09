// Importações
import express from "express";
import { BodyParserJSON, BodyParserUrlencoded, verification } from "../Config/Middleware";
import {
  RouterLogin,
  RouterProduto,
  RouterCategoria,
  RouterAutentificacao
} from "../Router";

// Classe App
class App {

  public SERVER: any;
  public URL_RAIZ: string;
  public VERSION: string;
  public ENVIRONMENT: string;
  public SWAGGER_PATH: String;

  // Construtor
  constructor() {
    this.SERVER = express();
    this.VERSION = "/" + process.env.SERVER_VERSION;
    this.ENVIRONMENT = "/" + process.env.SERVER_ENVIRONMENT;
    this.URL_RAIZ = "/api" + this.VERSION + this.ENVIRONMENT;
    this.SWAGGER_PATH = this.URL_RAIZ + '/doc';
    this.middleware();
    this.router();
  }

  // Middleware, são executados na inicialização do servidor
  private middleware() {
    this.SERVER.use(BodyParserJSON);
    this.SERVER.use(BodyParserUrlencoded);
    this.SERVER.use(express.json());
    this.SERVER.use(verification);
  }

  
  // Configuração de rotas
  private router() {
    this.SERVER.use(this.URL_RAIZ, RouterAutentificacao);
    this.SERVER.use(this.URL_RAIZ, RouterCategoria);
    this.SERVER.use(this.URL_RAIZ, RouterProduto);
    this.SERVER.use(this.URL_RAIZ, RouterLogin);
  }
}

export default App;