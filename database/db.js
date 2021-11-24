 const mysql = require('mysql');

const connection = mysql.createConnection({
   host: 'w3epjhex7h2ccjxx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'yneqsddstozbfcra',
   password: 'nm3zzysz01unc4t3',
   database: 'zf421q3d10smxkpk'
 });
 connection.connect((err) => {
    if (err) throw err;
    console.log("¡Conexión establecida!");
 });
 module.exports = connection;