"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendServerError = exports.sendNotFoundError = exports.sendUnauthorizeError = exports.sendBadRequestError = void 0;
//Exports
//Response that is sent if the request is invalid
const sendBadRequestError = (response, message = `Une erreur s'est produite (400)`) => {
    response.status(400).json({ message });
};
exports.sendBadRequestError = sendBadRequestError;
//Response that is sent if trying to do an action without permissions
const sendUnauthorizeError = (response, message = `Une erreur s'est produite (401)`) => {
    response.status(401).json({ message });
};
exports.sendUnauthorizeError = sendUnauthorizeError;
//Response that is sent if the ressource asked does not exists
const sendNotFoundError = (response, message = `Une erreur s'est produite (404)`) => {
    response.status(404).json({ message });
};
exports.sendNotFoundError = sendNotFoundError;
//Response that is sent if the server encountered an issue
const sendServerError = (response, message = `Une erreur s'est produite (500)`) => {
    response.status(500).json({ message });
};
exports.sendServerError = sendServerError;
