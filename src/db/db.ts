import getEnv from "../utils/getEnv";
const Pool = require("pg").Pool;

const pool = new Pool({
    user: getEnv().database.user,
    password: getEnv().database.password,
    database: getEnv().database.database,
    host: getEnv().database.host,
    port: getEnv().database.port
});

export default pool;