const { Schema, model } = require("mongoose");
const UsuarioSchema = new Schema(
  {
     cedula:Number,  
    nombre: String,
    apellido: String,
    numPasaporte:Number,
    edad:Number,
    nacionalidad:String,
    telefono:Number,
    correo:String,
    contrasenna:String,
    direccion:String
  },
  { timestamps: true }
);
const AuthorModel = model("Usuario", UsuarioSchema);
module.exports = AuthorModel;
