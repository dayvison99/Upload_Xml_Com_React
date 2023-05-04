import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Marley99",
    database:"datafiosaude"  
});
