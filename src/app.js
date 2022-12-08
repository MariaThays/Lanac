const swaggerUi = require('swagger-ui-express');
 const swaggerFile = require('../swagger/swagger_output.json');

require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const criancasRoutes = require("./routers/criancasRoutes"); 
const padrinhosRoutes = require("./routers/padrinhosRoutes");

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/",criancasRoutes);
app.use("/",padrinhosRoutes);
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));



module.exports = app;
