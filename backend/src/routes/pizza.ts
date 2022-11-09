//Imports
import * as express from 'express';
const router = express.Router();

import * as pizzaController from '../controllers/pizza';
import * as middlewareTokenExtract from '../middlewares/token-extract';
import * as middlewareMulterConfig from '../middlewares/multer-config';

//Routes
router.get('/', pizzaController.getAllPizzas);
router.post('/', middlewareTokenExtract, middlewareMulterConfig, pizzaController.uploadPizza);
router.put('/:id', middlewareTokenExtract, middlewareMulterConfig, pizzaController.modifyPizza);
router.delete('/:id', middlewareTokenExtract, pizzaController.deletePizza);

//Exports
module.exports = router;
