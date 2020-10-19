const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
})

con.connect((err) => {
    if(error) throw error;
    console.log("Connected");
})

module.exports = con;