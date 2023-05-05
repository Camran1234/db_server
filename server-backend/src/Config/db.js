const mysql = require('mysql2')

const configure = {
    //host: 'db-network.c7a1pogzvzij.us-east-1.rds.amazonaws.com',
    host: '54.226.142.44',
    user: 'admin',
    multipleStatements: true,
    password: 'DemonHunter1234.-',
    database: 'db_redes',
    port: '3306'
    
}

const connection = mysql.createConnection(configure)

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ', err);
    } else {
      console.log('Connected to database successfully!');
    }
  });

process.on('SIGINT', () => {
    connection.end();
});

module.exports = connection;``