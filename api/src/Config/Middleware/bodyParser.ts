// Importação
import bodyParser from "body-parser";

// Configuração de BodyParser
const BodyParserJSON = bodyParser.json();
const BodyParserUrlencoded = bodyParser.urlencoded({extended: true});

// Exportação
export { BodyParserJSON, BodyParserUrlencoded }