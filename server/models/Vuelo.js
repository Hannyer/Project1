const { Schema, model } = require("mongoose");

const VueloSchema = new Schema(
  {
     IDVuelo:Number,

     IdAvion:[

        {
    
            type:Schema.Types.ObjectId,
            ref:"Avion",
        }
    ],

     AeroPuertoLocal:String,

     AeroPuertoDestino:String,
     Fecha:Date,
     Hora:Date
    
  },
  { timestamps: true }
);

const VueloModel = model("Vuelo", VueloSchema);

module.exports = VueloModel;
