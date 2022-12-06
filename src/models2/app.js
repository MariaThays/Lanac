require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const criancasRoutes = require("./routers/criancasRoutes"); 


const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/criancas/console",criancasRoutes);

module.exports = app;