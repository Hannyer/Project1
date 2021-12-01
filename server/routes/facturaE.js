const express = require("express");
const router = express.Router();
const facturaEController = require("../controller/FacturaEController");

//Autenticación para el uso del API
const auth = require("../middleware/auth");
const { permit } = require("../middleware/authorization");

//Definición de rutas para cada uno de los verbos para los post
//router.get("/", auth, permit("admin"), postController.get);
router.get("/",facturaEController.getFacturaD );

router.get("/:id", facturaEController.getFacturaDById);

router.post("/", facturaEController.create);

router.delete("/:id",facturaEController.delete);

router.put("/:id", facturaEController.update);

module.exports = router;