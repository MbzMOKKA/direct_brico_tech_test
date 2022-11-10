"use strict";
//Exports
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToDatabase = void 0;
const addToDatabase = (element, dbArray) => {
    dbArray.push(element);
    return true;
};
exports.addToDatabase = addToDatabase;
