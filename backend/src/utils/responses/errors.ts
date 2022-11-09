//Imports
import { Response } from '../misc';

//Exports

//Response that is sent if the request is invalid
export const sendBadRequestError = (response: Response, message: string = `Une erreur s'est produite (400)`) => {
    response.status(400).json({ message });
};

//Response that is sent if trying to do an action without permissions
export const sendUnauthorizeError = (response: Response, message: string = `Une erreur s'est produite (401)`) => {
    response.status(401).json({ message });
};

//Response that is sent if the ressource asked does not exists
export const sendNotFoundError = (response: Response, message: string = `Une erreur s'est produite (404)`) => {
    response.status(404).json({ message });
};

//Response that is sent if the server encountered an issue
export const sendServerError = (response: Response, message: string = `Une erreur s'est produite (500)`) => {
    response.status(500).json({ message });
};
