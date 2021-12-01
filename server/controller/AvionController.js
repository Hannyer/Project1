const AvionModel = require("../models/Avion");

module.exports.getAvion = async (req, res, next) => {
  const aereo = await AvionModel.find().exec();
  res.json(aereo);
};

module.exports.getAvionById = async (req, res, next) => {
  const id = req.params.id;
  const aereo = await AvionModel.findById(id).exec();
  res.json(aereo);
};

module.exports.create = (req, res, next) => {
  const {IDAvion,Marca,CantAsientos,Fabricante,FechaFabricacion,AereoLinea} = req.body;
  const aereo = new AvionModel({IDAvion:IDAvion,Marca:Marca,CantAsientos:CantAsientos,Fabricante:Fabricante,FechaFabricacion:FechaFabricacion,AereoLinea:AereoLinea });
  aereo.save();
  res.json(aereo);
};

module.exports.delete = async (req, res, next) => {
  const aereo = await AvionModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (aereo) {
    res.json({ result: `Usuario borrado correctamente`, aereo: aereo });
  } else {
    res.json({ result: "Id de avión Invalida Invalid", aereo: aereo });
  }
};

module.exports.update = async (req, res, next) => {
  const {IDAvion,Marca,CantAsientos,Fabricante,FechaFabricacion,AereoLinea } = req.body;
  const aereo = await AvionModel.findOneAndUpdate(
   
    { _id: req.params.id },
    {IDAvion:IDAvion,Marca:Marca,CantAsientos:CantAsientos,Fabricante:Fabricante,FechaFabricacion:FechaFabricacion,AereoLinea:AereoLinea}, 
   
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(aereo);
};