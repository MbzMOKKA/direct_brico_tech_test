"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendUploadSuccess = exports.sendAccountCreationSuccess = exports.sendModifySuccess = exports.sendDeleteSuccess = exports.sendGenericSuccess = void 0;
//Exports
//Response that is sent if an generic action is successfully done
const sendGenericSuccess = (response, message = 'Requête réussit') => {
    response.status(200).json({ message });
};
exports.sendGenericSuccess = sendGenericSuccess;
//Response that is sent if a deletion is successfully done
const sendDeleteSuccess = (response, message = 'Suppression effectué') => {
    response.status(200).json({ message });
};
exports.sendDeleteSuccess = sendDeleteSuccess;
//Response that is sent if a modification is successfully done
const sendModifySuccess = (response, message = 'Modification effectué') => {
    response.status(200).json({ message });
};
exports.sendModifySuccess = sendModifySuccess;
//Response that is sent if an account is successfully created
const sendAccountCreationSuccess = (response, message = 'Compte créé') => {
    response.status(201).json({ message });
};
exports.sendAccountCreationSuccess = sendAccountCreationSuccess;
//Response that is sent if an upload is successfully done
const sendUploadSuccess = (response, message = 'Publication effectué') => {
    response.status(201).json({ message });
};
exports.sendUploadSuccess = sendUploadSuccess;
