const app = require('./src/models2/app');

const DB_PORT = process.env.DB_PORT


app.listen(DB_PORT, () =>{console.log(`Rodando na porta: ${DB_PORT}`)
})