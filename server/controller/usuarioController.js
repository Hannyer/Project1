const UsuarioModel = require("../models/Usuario");
const jwt = require('jsonwebtoken');

//Se obtiene las variables de entorno
const config = process.env;


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
  const usuario = new UsuarioModel({cedula:cedula, nombre:nombre,apellido:apellido,numPasaporte:numPasaporte,edad:edad,nacionalidad:nacionalidad,telefono:telefono,correo:correo,contrasenna:contrasenna,direccion:direccion,estado:true,rol:"Cliente" });
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






// creación de nuevos usuarios
module.exports.signup = async (req, res, next) => {
    const { correo, contrasenna, rol} = req.body;
    if (!correo || !contrasenna) {
        res.json({ success: false, msg: 'Por favor envié los datos de correo y contraseña!' });
    } else {
        var newUser = new UsuarioModel({ correo: correo, contrasenna: contrasenna, rol:rol });
        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'El usuario ya existe en la base de datos!' });
            }
            res.json({ success: true, msg: 'Usuario creado con exito!' });
        });
    }
};



module.exports.signin = async (req, res, next) => {

  const { correo, contrasenna } = req.body;

  const user = await UsuarioModel.findOne({ correo: correo }).exec();

  if (!user) {
      res.status(401).send({ success: false, msg: 'Autenticación incorrecta, por favor valide el usuario y contraseña' });
  } else {
      //Si el usuario existe verifica si las contraseñas
      user.comparePassword(contrasenna, user.contrasenna, function (err, isMatch) {
          if (isMatch && !err) {
            // Si el usuario es correcto y la contraseña coindice se procede a crear el token
            const token = jwt.sign(
              { correo: correo },
              config.SECREWORDJWT,
              { expiresIn: "2h" }
            );
            // return the information including token as JSON
            const payload = { rol: user.rol, correo: user.correo };
            res.status(202).send({ success: true, token: token, user: payload });
          } else {
              //si la contraseña no coincide se procede a indicar el error
              res.status(401).send({ success: false, msg: 'Autenticación incorrecta, por favor valide el usuario y contraseña' });
              //res.json({ success: false, msg: 'Authentication failed. Wrong password.' });
          }
      });
  }
};