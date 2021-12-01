const { Schema, model } = require("mongoose");
const AsientoSchema = new Schema(
  {
     IdAvion:[
        {
            type:Schema.Types.ObjectId,
            ref:"Avion",   
        }
     ],
     Fila:String,
    NumAsiento:Number
  },
  { timestamps: true }
);
const AsientoModel = model("Asiento", AsientoSchema);
module.exports = AsientoModel;