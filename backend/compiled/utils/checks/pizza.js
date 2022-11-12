"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizzaFieldsAreValid = void 0;
//Exports
const pizzaFieldsAreValid = (name, imageURL, price, ingredients) => {
    //Name must be a non empty string
    if (typeof name != 'string' || name.length < 1) {
        return false;
    }
    //Image URL must be a string
    if (typeof imageURL != 'string') {
        return false;
    }
    //Price must be a number between 5 and 20
    if (price < 5 || price > 20) {
        return false;
    }
    //Ingredients must be a string
    if (typeof ingredients != 'string') {
        return false;
    }
    return true;
};
exports.pizzaFieldsAreValid = pizzaFieldsAreValid;
