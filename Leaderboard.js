const { Client } = require('pg')

const client = new Client({
  user: 'hannahfrost',
  host: 'localhost',
  database: 'bird_game'
})
client.connect()
.then(() => console.log('Connected!'))
.then(() => client.query('SELECT * FROM leaderboard'))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())
