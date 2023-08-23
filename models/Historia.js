import mongoose from "mongoose";

const Schema = mongoose.Schema

const Historia = new Schema({
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: "Usuario", require: true},
    imagen: {type: String, require: true},
    reaccion: {type: [{tipoReaccion: String, cantidad: Number, usuario: mongoose.Schema.Types.ObjectId}], default: 0},
    fechaCreacion: {type: Date, default: Date.now}
})

export default mongoose.model("Historia", Historia)