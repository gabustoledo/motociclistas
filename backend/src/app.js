// Dependencias
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Exportacion de Rutas
const horarioRouter = require("./routes/horario.routes");
// const productRouter = require("./routes/products.routes");
// const authRouter = require("./routes/auth.routes");

const app = express();

require("dotenv").config();
app.set("port", process.env.PORT || 8080);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Definicion de rutas de la api
app.use("/api/horario", horarioRouter);
// app.use("/api/products", productRouter);
// app.use("/api/auth", authRouter);

module.exports = app;
