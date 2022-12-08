const express = require('express')
const app = express()
const mysql = require('mysql') ;
const port = 3000

var connection = mysql.createConnection({
  host: 'localhost',
  database: 'nemshop',
  user: 'root',
  password: 'password',
});

connection.connect()

app.get('/', (req, res) => {
  connection.query(`SELECT * FROM Banner`, (err, data) => {
    if (err) throw err ;
    res.json(data)
   
  });

}),

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})