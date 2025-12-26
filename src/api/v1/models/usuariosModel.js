import { model, Schema } from "mongoose";

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

export default model("Usuario", usuarioSchema);