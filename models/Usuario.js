import mongoose from "mongoose";
import { fotosPerfil } from "../src/rutas";

const Schema = mongoose.Schema

const Usuario = new Schema({
    nombre: {type: String, require: true, maxlength: 15},
    apellido: {type: String, require: true, maxlength: 15},
    telefono: {type: String, minlength: 10, maxlength:10},
    correo: {type: String, require: true, unique: true},
    clave: {type: String, require: true, minlength: 8},
    fotoPerfil: {type: String, default: fotosPerfil.defaultFoto},
    fechaNacimiento: {type: Date, require: true},
    Genero: {type: String, require: true}
})

export default mongoose.model("Usuario", Usuario)