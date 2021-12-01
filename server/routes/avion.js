const express = require("express");
const router = express.Router();
const avionController = require("../controller/AvionController");

//Autenticación para el uso del API
const auth = require("../middleware/auth");
const { permit } = require("../middleware/authorization");

//Definición de rutas para cada uno de los verbos para los post
//router.get("/", auth, permit("admin"), postController.get);
router.get("/", avionController.getAvion);

router.get("/:id",  avionController.getAvionById);

router.post("/",  avionController.create);

router.delete("/:id", avionController.delete);

router.put("/:id",  avionController.update);

module.exports = router;