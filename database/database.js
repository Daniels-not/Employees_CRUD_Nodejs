const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees'
});

connection.connect((error) => {
    if (error) {
        console.log("Opps 🥺, something has happened on the data base: " + error);
    }
    else{
        console.log("The connection to the data base has been stablish 😃");
    }
})

module.exports = connection;