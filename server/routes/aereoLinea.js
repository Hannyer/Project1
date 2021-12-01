const express = require("express");
const router = express.Router();
const aereoController = require("../controller/AereoLineaController");

//Autenticación para el uso del API
const auth = require("../middleware/auth");
const { permit } = require("../middleware/authorization");

//Definición de rutas para cada uno de los verbos para los post
//router.get("/", auth, permit("admin"), postController.get);
router.get("/", aereoController.getAreoLinea  );

router.get("/:id",  aereoController.getAereoLineaById);

router.post("/",  aereoController.create);

router.delete("/:id", aereoController.delete);

router.put("/:id",  aereoController.update);

module.exports = router;