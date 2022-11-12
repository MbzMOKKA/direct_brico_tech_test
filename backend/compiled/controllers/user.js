"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = exports.register = void 0;
//Imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const errorFunctions = require("../utils/responses/errors");
const successFunctions = require("../utils/responses/successes");
const checkUser = require("../utils/checks/user");
const misc = require("../utils/misc");
const user_1 = require("../models/user");
//Exports
const register = (request, response, next) => {
    try {
        if (checkUser.onDBfromEmail(request.body.email) !== undefined) {
            throw `Cette email est déjà utilisé`;
        }
        if (!checkUser.registerFieldsAreValid(request.body.email, request.body.password, request.body.name, request.body.surname)) {
            throw `L'email, mot de passe, prénom ou nom n'est pas dans le bon format`;
        }
        //Hashing the password of the new user
        bcrypt
            .hash(request.body.password, 11)
            .then((hash) => {
            //Hashed password created, creating the user
            const user = {
                id: user_1.users.length,
                email: request.body.email,
                password: hash,
                name: request.body.name,
                surname: request.body.surname,
            };
            //Saving the new user to the data base
            misc.addToDatabase(user, user_1.users);
            successFunctions.sendAccountCreationSuccess(response);
        })
            //Hashing failed
            .catch(() => errorFunctions.sendServerError(response));
    }
    catch (error) {
        //Creation failed
        errorFunctions.sendServerError(response, error);
    }
};
exports.register = register;
const logIn = (request, response, next) => {
    try {
        //Looking if the user exists
        const userOnDB = checkUser.onDBfromEmail(request.body.email);
        if (userOnDB === undefined) {
            throw `Email ou mot de passe incorrect`;
        }
        //Email is okay
        bcrypt
            .compare(request.body.password, userOnDB.password)
            .then((valid) => {
            if (!valid) {
                //Wrong password
                errorFunctions.sendServerError(response, `Email ou mot de passe incorrect`);
            }
            else {
                //Everything is okay, the user is logged in
                response.status(200).json({
                    token: jwt.sign({ userEmail: userOnDB.email }, process.env.TOKEN_SECRET_WORD, { expiresIn: '24h' }),
                });
            }
        })
            //Server error
            .catch(() => errorFunctions.sendServerError(response));
    }
    catch (error) {
        //Creation failed
        errorFunctions.sendServerError(response, error);
    }
};
exports.logIn = logIn;
