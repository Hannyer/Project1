const FacturaEModel = require("../models/FacturaEncabezado");

module.exports.getFacturaD = async (req, res, next) => {
  const facturaD = await FacturaEModel.find().exec();
  res.json(facturaD);
};

module.exports.getFacturaDById = async (req, res, next) => {
  const id = req.params.id;
  const facturaE = await FacturaEModel.findById(id).exec();
  res.json(facturaE);
};

module.exports.create = (req, res, next) => {
  const {IdFE,Usuario,Fecha,TipoPago,Estado,TipoTiquete} = req.body;
  const facturaD = new FacturaEModel({IdFE:IdFE,Usuario:Usuario,Fecha:Fecha,TipoPago:TipoPago,Estado:Estado,TipoTiquete:TipoTiquete});
  facturaD.save();
  res.json(facturaD);
};

module.exports.delete = async (req, res, next) => {
  const facturaE = await FacturaEModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (facturaE) {
    res.json({ result: `Registro borrado correctamente`, facturaE: facturaE });
  } else {
    res.json({ result: "Id de factura Invalida Invalid", facturaE: facturaE });
  }
};

module.exports.update = async (req, res, next) => {
  const {IdFE,Usuario,Fecha,TipoPago,Estado,TipoTiquete} = req.body;
  const facturaD = await FacturaEModel.findOneAndUpdate(
   
    { _id: req.params.id },
    {IdFE:IdFE,Usuario:Usuario,Fecha:Fecha,TipoPago:TipoPago,Estado:Estado,TipoTiquete:TipoTiquete}, 
   
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(facturaD);
};