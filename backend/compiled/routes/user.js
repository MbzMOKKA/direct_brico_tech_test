"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
//Routes
router.post('/register', userController.register);
router.post('/login', userController.logIn);
//Exports
module.exports = router;
