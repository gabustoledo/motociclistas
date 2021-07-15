const { Schema, model } = require("mongoose");

const horarioSchema = new Schema(
  {
    hora: { type: String, required: true },
    disponibles: { type: Number, required: true, default: 8},
  },
  {
    timestamps: true, // Para la fecha de creacion y modificacion
    versionKey: false, // Para quitar eso de _v
  }
);

module.exports = model("Horario", horarioSchema);