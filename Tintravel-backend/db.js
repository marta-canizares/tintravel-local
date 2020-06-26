import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();


// Configurar conexión MySQL
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456', // process.env.MYSQLPASS,
    database: 'tintravel'
}
);

// Ejecutar conexión
connection.connect();

export default connection;
