const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    nombre: {
        type: String,
        trim: true
    },
    usuario: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    lista: {
        type: Schema.Types.ObjectId,
        ref: 'Lista'
    }
});

module.exports = mongoose.model("Usuario", usuarioSchema);