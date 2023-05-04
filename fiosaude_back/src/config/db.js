const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "@Marley99",
database:"datafiosaude" 
})

module.exports = db;