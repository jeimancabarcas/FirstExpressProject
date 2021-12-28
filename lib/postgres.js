const config = require('./../config/config')
const { Pool } =  require('pg')

const uri = `postgres://${config.database.user}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.database}`;
const pool = new Pool({
  connectionString: uri
});
console.log(config.database)

module.exports = pool;
