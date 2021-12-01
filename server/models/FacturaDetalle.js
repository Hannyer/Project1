const { Schema, model } = require("mongoose");
const FacturaDetalleSchema = new Schema(
  {
     IdFD:Number,
     Vuelo:[
    {
        type:Schema.Types.ObjectId,
        ref:"Vuelo"
    }
     ],    
     Pais:String,
     Asiento:[
        {
            type:Schema.Types.ObjectId,
            ref:"Asiento",
        }
    ],
    Precio:Number,
    Impuesto:Number
  },
  { timestamps: true }
);
const FacturaDModel = model("facturaDetalle",FacturaDetalleSchema);
module.exports = FacturaDModel;