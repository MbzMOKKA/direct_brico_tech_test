"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerFieldsAreValid = exports.emailIsUnique = void 0;
const user_1 = require("../../models/user");
//Exports
const emailIsUnique = (email) => {
    for (let user of user_1.users) {
        if (user.email == email) {
            return false;
        }
    }
    return true;
};
exports.emailIsUnique = emailIsUnique;
const registerFieldsAreValid = (email, password, name, surname) => {
    //Email must be a non empty string and contain a @
    const regexEmail = /@/;
    if (typeof email != 'string' || email.length < 1 || email.match(regexEmail) == null) {
        return false;
    }
    //Password must be a string, 8+ caracters long, contains a number, a symbol, a uppercase caracter and a lowercase caracter
    const regexPassword = /@/; //<<<<<<<<<<<<<<<<<<<<<<TODO
    if (typeof password != 'string' || password.length < 9 || password.match(regexPassword) == null) {
        return false;
    }
    //Name must be a non empty string
    if (typeof name != 'string' || name.length < 1) {
        return false;
    }
    //Surname must be a non empty string
    if (typeof surname != 'string' || surname.length < 1) {
        return false;
    }
    return true;
};
exports.registerFieldsAreValid = registerFieldsAreValid;
