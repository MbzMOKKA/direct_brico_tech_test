//Imports
import * as express from 'express';
const router = express.Router();

import * as userController from '../controllers/user';

//Routes
router.post('/register', userController.register);
router.post('/login', userController.logIn);

//Exports
module.exports = router;
