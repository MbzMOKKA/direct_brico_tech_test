//Imports
import { users } from '../../models/user';

//Exports
export const onDBfromEmail = (email) => {
    return users.find((user) => user.email == email);
};

export const registerFieldsAreValid = (email, password, name, surname) => {
    //Email must be a non empty string and contain a @
    const regexEmail = /@/;
    if (typeof email != 'string' || email.length < 1 || email.match(regexEmail) == null) {
        return false;
    }
    //Password must be a string, 8+ characters long, contains a number, a symbol, an uppercase character and a lowercase character
    const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])/;
    if (typeof password != 'string' || password.length < 8 || password.match(regexPassword) == null) {
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
