const AsientoModel = require("../models/Asiento");

module.exports.getAsiento = async (req, res, next) => {
  const asiento = await AsientoModel.find().exec();
  res.json(asiento);
};

module.exports.getAsientoById = async (req, res, next) => {
  const id = req.params.id;
  const asiento = await AsientoModel.findById(id).exec();
  res.json(asiento);
};

module.exports.create = (req, res, next) => {
  const { IdAvion,Fila,NumAsiento} = req.body;
  const Asiento = new AsientoModel({IdAvion:IdAvion,Fila:Fila,NumAsiento:NumAsiento});
  Asiento.save();
  res.json(Asiento);
};

module.exports.delete = async (req, res, next) => {
  const Asient = await AsientoModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (Asient) {
    res.json({ result: `Usuario borrado correctamente`, aereo: Asient });
  } else {
    res.json({ result: "Id de AereloLínea Invalida Invalid", aereo: Asient });
  }
};

module.exports.update = async (req, res, next) => {
  const {IdAvion,Fila,NumAsiento} = req.body;
  const Asiento = await AsientoModel.findOneAndUpdate(
   
    { _id: req.params.id },
    {IdAvion:IdAvion,Fila:Fila,NumAsiento:NumAsiento}, 
   
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(Asiento);
};