
import * as dotenv from "dotenv";

dotenv.config();

export const ormconfig = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "financial_control",
    synchronize: true,
    logging: false,
    entities: [
       "src/entity/**/*.ts"
    ],
    migrations: [
       "src/migration/**/*.ts"
    ],
    subscribers: [
       "src/subscriber/**/*.ts"
    ],
    cli: {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
 }