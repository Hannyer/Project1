const UsuarioModel = require("../models/Usuario");

module.exports.getUsuario = async (req, res, next) => {
  const usuario = await UsuarioModel.find().exec();
  res.json(usuario);
};

module.exports.getUsuarioById = async (req, res, next) => {
  const id = req.params.id;
  const usuario = await UsuarioModel.findById(id).exec();
  res.json(usuario);
};

module.exports.create = (req, res, next) => {
  const { cedula, nombre,apellido,numPasaporte,edad,nacionalidad,telefono,correo,contrasenna,direccion } = req.body;
  const usuario = new UsuarioModel({cedula:cedula, nombre:nombre,apellido:apellido,numPasaporte:numPasaporte,edad:edad,nacionalidad:nacionalidad,telefono:telefono,correo:correo,contrasenna:contrasenna,direccion:direccion });
  usuario.save();
  res.json(usuario);
};

module.exports.delete = async (req, res, next) => {
  const usuario = await UsuarioModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (usuario) {
    res.json({ result: `Usuario borrado correctamente`, usuario: usuario });
  } else {
    res.json({ result: "Id de usuario Invalido Invalid", usuario: usuario });
  }
};

module.exports.update = async (req, res, next) => {
  const { cedula, nombre,apellido,numPasaporte,edad,nacionalidad,telefono,correo,contrasenna,direccion } = req.body;
  const usuario = await UsuarioModel.findOneAndUpdate(
    { _id: req.params.id },
    { cedula:cedula, nombre:nombre,apellido:apellido,numPasaporte:numPasaporte,edad:edad,nacionalidad:nacionalidad,telefono:telefono,correo:correo,contrasenna:contrasenna,direccion:direccion   }, // ==> {title: title, body: body}
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(usuario);
};
