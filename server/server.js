const express = require("express")
const app = express()
 
//db
import pg from 'pg'
const { Client } = pg
 
const client = new Client({
  host: 'PC0128',
  port: 3306,
  database: 'meteodb',
  user: 'ServerMeteoDBPascal',
  password: 'MeteoPascalReading',
})

client.connect()

const result = client.query("SELECT * FROM grandezzafisica")
console.log(result[0])

client.end()


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})

app.use(express.static("./../"));

app.get("/", (req, res) => {
  res.render("./../index")
});