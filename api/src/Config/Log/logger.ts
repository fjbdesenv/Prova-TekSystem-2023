import dotenv from "dotenv";
import { format, createLogger, transports } from "winston";

dotenv.config();

const { combine, timestamp, label, printf } = format;
const CATEGORY = "Log Formatado";

const myTransports =  [
    new transports.File({ filename: 'error.log', level: 'error', dirname: __dirname + "/../../Logs", maxsize: 10000000 }),
    new transports.File({ filename: 'info.log', level: 'info', dirname: __dirname + "/../../Logs", maxsize: 10000000 })
];

const customFormat = printf(({level, message, label, timestamp})=> `${timestamp} [${label}] ${level}: ${message}`);

const logger = createLogger({ 
    format: combine(label({ label: CATEGORY }), timestamp(), customFormat),
    transports: myTransports,
});

if(process.env.SERVER_ENVIRONMENT === "develop"){
    logger.add(new transports.Console());
}

export default logger;