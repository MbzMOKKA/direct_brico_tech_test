"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyOnDatabase = exports.removeFromDatabase = exports.addToDatabase = exports.generateId = void 0;
const generateId = (dbArray) => {
    if (dbArray.length > 0) {
        const lastElement = dbArray[dbArray.length - 1];
        return lastElement.id + 1;
    }
    else {
        return 0;
    }
};
exports.generateId = generateId;
const addToDatabase = (element, dbArray) => {
    dbArray.push(element);
};
exports.addToDatabase = addToDatabase;
const removeFromDatabase = (elementId, dbArray) => {
    let index = -1;
    for (let i in dbArray) {
        if (dbArray[i].id == elementId) {
            index = Number(i);
            break;
        }
    }
    if (index > -1) {
        dbArray.splice(index, 1);
        return true;
    }
    return false;
};
exports.removeFromDatabase = removeFromDatabase;
const modifyOnDatabase = (newElement, dbArray) => {
    let index = -1;
    for (let i in dbArray) {
        if (dbArray[i].id == newElement.id) {
            index = Number(i);
            break;
        }
    }
    if (index > -1) {
        dbArray[index] = newElement;
        return true;
    }
    return false;
};
exports.modifyOnDatabase = modifyOnDatabase;
