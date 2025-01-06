import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bluryfonseca070702@',
    database: 'crud',
});