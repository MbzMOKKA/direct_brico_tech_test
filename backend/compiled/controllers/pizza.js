"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePizza = exports.modifyPizza = exports.uploadPizza = exports.getAllPizzas = void 0;
//Imports
const errorFunctions = require("../utils/responses/errors");
const successFunctions = require("../utils/responses/successes");
const checkUser = require("../utils/checks/user");
const checkPizza = require("../utils/checks/pizza");
const misc = require("../utils/misc");
const pizza_1 = require("../models/pizza");
//Exports
const getAllPizzas = (request, response, next) => {
    response.status(200).json(pizza_1.pizzas);
};
exports.getAllPizzas = getAllPizzas;
const uploadPizza = (request, response, next) => {
    try {
        //Checking if the user behind the request exists
        const userOnDB = checkUser.onDBfromEmail(request.auth.userEmail);
        if (userOnDB === undefined) {
            throw "Jeton d'authentification incorrect";
        }
        //Checking if the pizza infos are in the right format
        const pizzaName = request.body.name;
        const pizzaImageURL = request.body.imageURL;
        const pizzaPrice = request.body.price;
        const pizzaIngredients = request.body.ingredients;
        if (!checkPizza.pizzaFieldsAreValid(pizzaName, pizzaImageURL, pizzaPrice, pizzaIngredients)) {
            throw "L'un des champs saisie est incorrect";
        }
        //Creating the uploaded pizza
        const pizza = {
            id: misc.generateId(pizza_1.pizzas),
            uploaderEmail: request.auth.userEmail,
            name: pizzaName,
            price: Math.round(pizzaPrice * 100),
            imageURL: pizzaImageURL === '' ? 'null' : pizzaImageURL,
            ingredients: pizzaIngredients,
        };
        //Saving the new pizza to the data base
        misc.addToDatabase(pizza, pizza_1.pizzas);
        response.status(200).json(pizza);
    }
    catch (error) {
        errorFunctions.sendServerError(response, error);
    }
};
exports.uploadPizza = uploadPizza;
const modifyPizza = (request, response, next) => {
    try {
        //Checking if the user behind the request exists
        const userOnDB = checkUser.onDBfromEmail(request.auth.userEmail);
        if (userOnDB === undefined) {
            throw "Jeton d'authentification incorrect";
        }
        const pizzaId = request.params.id;
        //Checking if the editor owns the pizza
        if (!checkPizza.userOwnsPizza(request.auth.userEmail, pizzaId)) {
            throw 'Vous ne pouvez pas modifier une pizza qui ne vous appartiens pas';
        }
        //Checking if the pizza infos are in the right format
        const pizzaName = request.body.name;
        const pizzaImageURL = request.body.imageURL;
        const pizzaPrice = request.body.price;
        const pizzaIngredients = request.body.ingredients;
        if (!checkPizza.pizzaFieldsAreValid(pizzaName, pizzaImageURL, pizzaPrice, pizzaIngredients)) {
            throw "L'un des champs saisie est incorrect";
        }
        //Creating the new version of the pizza
        const pizza = {
            id: pizzaId,
            uploaderEmail: request.auth.userEmail,
            name: pizzaName,
            price: Math.round(pizzaPrice * 100),
            imageURL: pizzaImageURL === '' ? 'null' : pizzaImageURL,
            ingredients: pizzaIngredients,
        };
        //Modifying the pizza on the data base
        if (!misc.modifyOnDatabase(pizza, pizza_1.pizzas)) {
            throw 'Cette pizza est inexistante';
        }
        successFunctions.sendModifySuccess(response);
    }
    catch (error) {
        errorFunctions.sendServerError(response, error);
    }
};
exports.modifyPizza = modifyPizza;
const deletePizza = (request, response, next) => {
    try {
        //Checking if the user behind the request exists
        const userOnDB = checkUser.onDBfromEmail(request.auth.userEmail);
        if (userOnDB === undefined) {
            throw "Jeton d'authentification incorrect";
        }
        const pizzaId = request.params.id;
        //Checking if the remover owns the pizza
        if (!checkPizza.userOwnsPizza(request.auth.userEmail, pizzaId)) {
            throw 'Vous ne pouvez pas supprimer une pizza qui ne vous appartiens pas';
        }
        //Removing the pizza from the data base
        if (!misc.removeFromDatabase(pizzaId, pizza_1.pizzas)) {
            throw 'Cette pizza est inexistante';
        }
        successFunctions.sendDeleteSuccess(response);
    }
    catch (error) {
        errorFunctions.sendServerError(response, error);
    }
};
exports.deletePizza = deletePizza;
