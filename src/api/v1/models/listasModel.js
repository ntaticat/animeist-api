const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let listaSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    animes: [{
        nombre: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minLength: 2
        },
        estado: {
            type: String,
            enum: ["viendo", "por ver", "visto"],
            required: true,
            trim: true,
            lowercase: true
        }
    }]
});

module.exports = mongoose.model("Lista", listaSchema);