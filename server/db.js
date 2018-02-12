const mysql = require('promise-mysql');
const config = require('./config.json');

/*

config.json requires the following properties to be valid
{
  db: {
    host: '',
    user: '',
    password: '',
    database: ''
  }
}

*/


class SQL {
  constructor(config){
      this._config = { ...config, multipleStatements: true };
  }

  async start() {
    try {
      this._pool = await mysql.createPool(this._config);
      let query = `
        CREATE TABLE IF NOT EXISTS companies (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NUll
        );

        CREATE TABLE IF NOT EXISTS employees (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NUll,
          company_id INT,
          FOREIGN KEY (company_id) REFERENCES companies(id)
        );`;


      await this.query(query);

    } catch (e) {
      throw e;
    }
  }

  async query(queryString, params){
    if (!this._pool){
      await start();
    }

    let connection = await this._pool.getConnection();
    return new Promise((resolve, reject) => {
        connection.query(queryString, params).then((response) => {
          resolve(response);
        }).catch((e) => {
          reject(e);
        });

        connection.release();
    })
  }
}

let instance  = new SQL(config.db);
instance.start().catch((e) => {
  console.log(e);
  process.exit();
})

module.exports = {
  middleware: async (req, res, next) => {
    req.sql = instance;
    next();
  }
};