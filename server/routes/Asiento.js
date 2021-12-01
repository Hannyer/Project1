const express = require("express");
const router = express.Router();
const asientoController = require("../controller/AsientoController");

//Autenticación para el uso del API
const auth = require("../middleware/auth");
const { permit } = require("../middleware/authorization");

//Definición de rutas para cada uno de los verbos para los post
//router.get("/", auth, permit("admin"), postController.get);
router.get("/", asientoController.getAsiento);

router.get("/:id",  asientoController.getAsiento);

router.post("/",  asientoController.create);

router.delete("/:id", asientoController.delete);

router.put("/:id",  asientoController.update);

module.exports = router;