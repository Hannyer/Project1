const { Schema, model } = require("mongoose");
const FacturaEncabezadoSchema = new Schema(
  {
     IdFE:Number,
     Usuario:[
    {
        type:Schema.Types.ObjectId,
        ref:"Usuario"
    }
     ],    
     Fecha:Date,
    TipoPago:String,
    Estado:String,
    TipoTiquete:String
  },
  { timestamps: true }
);
const FacturaDModel = model("facturaEncabezado",FacturaEncabezadoSchema);
module.exports = FacturaDModel;