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
    try {
        //Looking if the user exists
        console.log(request.body.email);
        const userOnDB = checkUser.onDBfromEmail(request.body.email);

        console.log(userOnDB);
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
                } else {
                    //Everything is okay, the user is logged in
                    response.status(200).json({
                        userId: userOnDB.id,
                        token: jwt.sign({ userId: userOnDB.id }, process.env.TOKEN_SECRET_WORD, { expiresIn: '24h' }),
                    });
                }
            })
            //Server error
            .catch(() => errorFunctions.sendServerError(response));
    } catch (error) {
        //Creation failed
        errorFunctions.sendServerError(response, error);
    }
};
