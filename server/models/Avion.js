const { Schema, model } = require("mongoose");
const AvionSchema = new Schema(
  {
     IDAvion:Number,
     Marca:String,
     CantAsientos:Number,
     Fabricante:String,
     FechaFabricacion:Date,
     AereoLinea:[
        {
    
            type:Schema.Types.ObjectId,
            ref:"AereoLinea",
        }
    ]
  },
  { timestamps: true }
);
const AvionModel = model("Avion", AvionSchema);
module.exports = AvionModel;
