const AereoLineaModel = require("../models/AereoLinea");

module.exports.getAreoLinea = async (req, res, next) => {
  const aereo = await AereoLineaModel.find().exec();
  res.json(aereo);
};

module.exports.getAereoLineaById = async (req, res, next) => {
  const id = req.params.id;
  const aereo = await AereoLineaModel.findById(id).exec();
  res.json(aereo);
};

module.exports.create = (req, res, next) => {
  const {cedulaJuridica,nombre,pais} = req.body;
  const aereo = new AereoLineaModel({cedulaJuridica:cedulaJuridica, nombre:nombre,pais:pais });
  aereo.save();
  res.json(aereo);
};

module.exports.delete = async (req, res, next) => {
  const aereo = await AereoLineaModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (aereo) {
    res.json({ result: `Usuario borrado correctamente`, aereo: aereo });
  } else {
    res.json({ result: "Id de AereloLínea Invalida Invalid", aereo: aereo });
  }
};

module.exports.update = async (req, res, next) => {
  const {cedulaJuridica,nombre,pais } = req.body;
  const aereo = await AereoLineaModel.findOneAndUpdate(
   
    { _id: req.params.id },
    {cedulaJuridica:cedulaJuridica,nombre:nombre,pais:pais}, 
   
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(aereo);
};
