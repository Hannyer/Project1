const { Schema, model } = require("mongoose");
const AereoLineaSchema = new Schema(
  {
     cedulaJuridica:Number,
     nombre:String,
     pais:String
  },
  { timestamps: true }
);
const AereoLineaModel = model("AereoLinea", AereoLineaSchema);
module.exports = AereoLineaModel;