"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePizza = exports.modifyPizza = exports.uploadPizza = exports.getAllPizzas = void 0;
//Imports
const errorFunctions = require("../utils/responses/errors");
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
        const pizzIngredients = request.body.ingredients;
        if (!checkPizza.pizzaFieldsAreValid(pizzaName, pizzaImageURL, pizzaPrice, pizzIngredients)) {
            throw "L'un des champs saisie est incorrect";
        }
        //Creating the uploaded pizza
        const pizza = {
            id: pizza_1.pizzas.length,
            uploaderEmail: request.auth.userEmail,
            name: pizzaName,
            price: Math.round(pizzaPrice * 100),
            imageURL: pizzaImageURL === '' ? 'null' : pizzaImageURL,
            ingredients: pizzIngredients,
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
const modifyPizza = (request, response, next) => { };
exports.modifyPizza = modifyPizza;
const deletePizza = (request, response, next) => { };
exports.deletePizza = deletePizza;
/*

exports.uploadSauce = (request, response, next) => {
    //Building the sauce to upload to the data base
    const sauceObject = JSON.parse(request.body.sauce);
    delete sauceObject._id;
    delete sauceObject._userId;
    const sauceToUpload = new Sauce({
        ...sauceObject,
        userId: request.auth.userId,
        imageUrl: `${request.protocol}://${request.get('host')}/images/${request.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: [],
    });
    //Uploading the sauce to the data base
    sauceToUpload
        .save()
        .then(() => successFunctions.sendUploadSuccess(response))
        .catch((error) => {
            //Deleting the images that was created if an error occured
            fileSystem.unlink(`images/${request.file.filename}`, () => {
                errorFunctions.sendBadRequestError(response, error);
            });
        });
};

exports.modifySauce = (request, response, next) => {
    const sauceId = request.params.id;
    //Does the request contain an image?
    const sauceInReq = request.file
        ? {
              ...JSON.parse(request.body.sauce),
              imageUrl: `${request.protocol}://${request.get('host')}/images/${request.file.filename}`,
          }
        : {
              ...request.body,
          };
    sauceInReq._id = sauceId;
    delete sauceInReq._userId;
    //Verifying that the sauce exists
    Sauce.findOne({ _id: sauceId })
        .then((sauceObject) => {
            if (sauceObject === null) {
                //Sauce provided does not exists : bad request
                errorFunctions.sendNotFoundError(response, "Can't modify something that does not exists");
            } else {
                //The user behind the request does not own the sauce he is trying to modify
                if (sauceObject.userId != request.auth.userId) {
                    errorFunctions.sendUnauthorizeError(response);
                } else {
                    //Deleting the previous sauce image if a new one is provided
                    if (request.file) {
                        const filename = sauceObject.imageUrl.split('/images/')[1];
                        fileSystem.unlink(`images/${filename}`, () => {
                            //Modifying the sauce on the data base
                            Sauce.updateOne({ _id: sauceId }, sauceInReq)
                                .then(() => successFunctions.sendModifySuccess(response))
                                .catch((error) => errorFunctions.sendServerError(response, error));
                        });
                    } else {
                        //Modifying the sauce on the data base
                        Sauce.updateOne({ _id: sauceId }, sauceInReq)
                            .then(() => successFunctions.sendModifySuccess(response))
                            .catch((error) => errorFunctions.sendServerError(response, error));
                    }
                }
            }
        })
        .catch((error) => errorFunctions.sendServerError(response, error));
};

exports.deleteSauce = (request, response, next) => {
    const sauceId = request.params.id;
    //Verifying that the sauce exists
    Sauce.findOne({ _id: sauceId })
        .then((sauceObject) => {
            if (sauceObject === null) {
                //Sauce provided does not exists : bad request
                errorFunctions.sendNotFoundError(response, "Can't delete something that does not exists");
            } else {
                if (sauceObject.userId != request.auth.userId) {
                    //The user behind the request does not own the sauce he is trying to delete
                    errorFunctions.sendUnauthorizeError(response);
                } else {
                    //Deleting the image of the sauce on the server
                    const filename = sauceObject.imageUrl.split('/images/')[1];
                    fileSystem.unlink(`images/${filename}`, () => {
                        //Deleting the sauce from the data base
                        Sauce.deleteOne({ _id: sauceId })
                            .then(() => successFunctions.sendDeleteSuccess(response))
                            .catch((error) => errorFunctions.sendServerError(response, error));
                    });
                }
            }
        })
        .catch((error) => errorFunctions.sendServerError(response, error));
};
*/
