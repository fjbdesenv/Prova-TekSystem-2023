// Importações
import doenv from "dotenv";
import App from "./App/App";
import logger from "./Config/Log/logger";

doenv.config();

// constantes
const app = new App();
const PORT = process.env.SERVER_PORT || 5000;
const messagemInitial = () => logger.info(`Rodando em http://localhost:${PORT}${app.URL_RAIZ}/`);

// Iniciando servidor
app.SERVER.listen(PORT, messagemInitial);