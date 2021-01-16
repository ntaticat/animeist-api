const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const estadosValidos = {
    values: ["1", "2", "3"],
    message: "{VALUE} no es un valor valido"
};

let animeSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        unique: true
    },
    estado: {
        type: Number,
        default: 1,
        enum: estadosValidos
    } 
});

animeSchema.plugin(uniqueValidator, {message: "{PATH} debe ser unico"});

module.exports = mongoose.model("Anime", animeSchema);