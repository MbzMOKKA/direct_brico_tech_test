"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
const express = require("express");
const router = express.Router();
const pizzaController = require("../controllers/pizza");
const middlewareTokenExtract = require("../middlewares/token-extract");
const middlewareMulterConfig = require("../middlewares/multer-config");
//Routes
router.get('/', pizzaController.getAllPizzas);
router.post('/', middlewareTokenExtract, middlewareMulterConfig, pizzaController.uploadPizza);
router.put('/:id', middlewareTokenExtract, middlewareMulterConfig, pizzaController.modifyPizza);
router.delete('/:id', middlewareTokenExtract, pizzaController.deletePizza);
//Exports
module.exports = router;
