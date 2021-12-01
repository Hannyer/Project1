const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController");

//Autenticación para el uso del API
const auth = require("../middleware/auth");
const { permit } = require("../middleware/authorization");

//Definición de rutas para cada uno de los verbos para los post
//router.get("/", auth, permit("admin"), postController.get);
router.get("/",usuarioController.getUsuario  );

router.get("/:id", usuarioController.getUsuarioById);

router.post("/", usuarioController.create);

router.delete("/:id",usuarioController.delete);

router.put("/:id", usuarioController.update);

module.exports = router;