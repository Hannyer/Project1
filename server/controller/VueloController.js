const VueloModel = require("../models/Vuelo");

module.exports.getVuelos = async (req, res, next) => {
  const aereo = await VueloModel.find().exec();
  res.json(aereo);
};

module.exports.getVueloModelById = async (req, res, next) => {
  const id = req.params.id;
  const aereo = await VueloModel.findById(id).exec();
  res.json(aereo);
};

module.exports.create = (req, res, next) => {
  const {IDVuelo,IdAvion,AeroPuertoLocal,AeroPuertoDestino,Fecha,Hora} = req.body;
  const aereo = new VueloModel({IDVuelo:IDVuelo,IdAvion:IdAvion,AeroPuertoLocal:AeroPuertoLocal,AeroPuertoDestino:AeroPuertoDestino,Fecha:Fecha,Hora:Hora });
  aereo.save();
  res.json(aereo);
};

module.exports.delete = async (req, res, next) => {
  const aereo = await VueloModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (aereo) {
    res.json({ result: `Usuario borrado correctamente`, aereo: aereo });
  } else {
    res.json({ result: "Id de AereloLínea Invalida Invalid", aereo: aereo });
  }
};

module.exports.update = async (req, res, next) => {
  const {IDVuelo,IdAvion,AeroPuertoLocal,AeroPuertoDestino,Fecha,Hora} = req.body;
  const aereo = await VueloModel.findOneAndUpdate(
   
    { _id: req.params.id },
    {IDVuelo:IDVuelo,IdAvion:IdAvion,AeroPuertoLocal:AeroPuertoLocal,AeroPuertoDestino:AeroPuertoDestino,Fecha:Fecha,Hora:Hora}, 
   
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(aereo);
};