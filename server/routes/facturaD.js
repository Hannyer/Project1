const express = require("express");
const router = express.Router();
const facturaDController = require("../controller/FacturaDController");

//Autenticación para el uso del API
const auth = require("../middleware/auth");
const { permit } = require("../middleware/authorization");

//Definición de rutas para cada uno de los verbos para los post
//router.get("/", auth, permit("admin"), postController.get);
router.get("/",facturaDController.getFacturaD );

router.get("/:id", facturaDController.getFacturaDById);

router.post("/", facturaDController.create);

router.delete("/:id",facturaDController.delete);

router.put("/:id", facturaDController.update);

module.exports = router;