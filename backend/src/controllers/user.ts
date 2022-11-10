//Imports
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

import * as errorFunctions from '../utils/responses/errors';
import * as successFunctions from '../utils/responses/successes';
import * as checkUser from '../utils/checks/user';
import * as misc from '../utils/misc';
import { users } from '../models/user';

//Exports
export const register = (request, response, next) => {
    try {
        if (!checkUser.emailIsUnique(request.body.email)) {
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
                    id: users.length,
                    email: request.body.email,
                    password: hash,
                    name: request.body.name,
                    surname: request.body.surname,
                };
                //Saving the new user to the data base
                if (misc.addToDatabase(user, users)) {
                    //User created
                    successFunctions.sendAccountCreationSuccess(response);
                }
            })
            //Hashing failed
            .catch(() => errorFunctions.sendServerError(response));
    } catch (error) {
        //Creation failed
        errorFunctions.sendServerError(response, error);
    }
};
export const logIn = (request, response, next) => {
    console.log('----------------');
    console.log('TRYING TO LOGIN...');
    console.log(request.body);
};
/*
exports.register = (request, response, next) => {
    //Hashing the password of the new user
    bcrypt
        .hash(request.body.password, 11)
        .then((hash) => {
            //Hashed password created, creating the user
            const user = {
                email: request.body.email,
                password: hash,
            };
            //Saving the new user to the data base
            user.save()
                //User created
                .then(() => {
                    successFunctions.sendAccountCreationSuccess(response);
                })
                //Creation failed
                .catch((error) => errorFunctions.sendServerError(response, error));
        })
        //Hashing failed
        .catch((error) => errorFunctions.sendServerError(response, error));
};

exports.logIn = (request, response, next) => {
    //Looking if the user exists
    User.findOne({ email: request.body.email })
        .then((user) => {
            if (user === null) {
                //User does not exists
                errorFunctions.sendLogInError(response);
            } else {
                //Email is okay
                bcrypt
                    .compare(request.body.password, user.password)
                    .then((valid) => {
                        if (!valid) {
                            //Wrong password
                            errorFunctions.sendLogInError(response);
                        } else {
                            //Everything is okay, the user is logged in
                            response.status(200).json({
                                userId: user._id,
                                token: jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET_WORD, { expiresIn: '24h' }),
                            });
                        }
                    })
                    //Server error
                    .catch((error) => errorFunctions.sendServerError(response, error));
            }
        })
        //Server error
        .catch((error) => errorFunctions.sendServerError(response, error));
};
*/
