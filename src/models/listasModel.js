const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const estadosValidos = {
    values: ["1", "2", "3"],
    message: "{VALUE} no es un valor valido"
};

let listaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        unique: true
    },
    estado: {
        type: String,
        default: "1",
        enum: estadosValidos
    }
});

module.exports = mongoose.model("Lista", listaSchema);