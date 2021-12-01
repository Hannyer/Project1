const FacturaDModel = require("../models/FacturaDetalle");

module.exports.getFacturaD = async (req, res, next) => {
  const facturaD = await FacturaDModel.find().exec();
  res.json(facturaD);
};

module.exports.getFacturaDById = async (req, res, next) => {
  const id = req.params.id;
  const facturaD = await FacturaDModel.findById(id).exec();
  res.json(facturaD);
};

module.exports.create = (req, res, next) => {
  const {IdFD,Vuelo,Asiento,Pais,Precio,Impuesto} = req.body;
  const facturaD = new FacturaDModel({IdFD:IdFD,Vuelo:Vuelo,Asiento:Asiento,Pais:Pais,Precio:Precio,Impuesto:Impuesto});
  facturaD.save();
  res.json(facturaD);
};

module.exports.delete = async (req, res, next) => {
  const facturaD = await FacturaDModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (facturaD) {
    res.json({ result: `Usuario borrado correctamente`, aereo: facturaD });
  } else {
    res.json({ result: "Id de factura Invalida Invalid", aereo: facturaD });
  }
};

module.exports.update = async (req, res, next) => {
  const {IdFD,Vuelo,Asiento,Pais,Precio,Impuesto} = req.body;
  const facturaD = await FacturaDModel.findOneAndUpdate(
   
    { _id: req.params.id },
    {IdFD:IdFD,Vuelo:Vuelo,Asiento:Asiento,Pais:Pais,Precio:Precio,Impuesto:Impuesto}, 
   
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(facturaD);
};