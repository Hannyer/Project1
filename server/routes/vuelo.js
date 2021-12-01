const express = require("express");
const router = express.Router();
const vueloController = require("../controller/VueloController");

//Autenticación para el uso del API
const auth = require("../middleware/auth");
const { permit } = require("../middleware/authorization");

//Definición de rutas para cada uno de los verbos para los post
//router.get("/", auth, permit("admin"), postController.get);
router.get("/", vueloController.getVuelos);

router.get("/:id",  vueloController.getVueloModelById);

router.post("/",  vueloController.create);

router.delete("/:id", vueloController.delete);

router.put("/:id",  vueloController.update);

module.exports = router;