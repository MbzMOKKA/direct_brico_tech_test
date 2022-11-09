//Imports
import { Response } from '../misc';

//Exports

//Response that is sent if an generic action is successfully done
export const sendGenericSuccess = (response: Response, message: string = 'Requête réussit') => {
    response.status(200).json({ message });
};

//Response that is sent if a deletion is successfully done
export const sendDeleteSuccess = (response: Response, message: string = 'Suppression effectué') => {
    response.status(200).json({ message });
};

//Response that is sent if a modification is successfully done
export const sendModifySuccess = (response: Response, message: string = 'Modification effectué') => {
    response.status(200).json({ message });
};

//Response that is sent if an account is successfully created
export const sendAccountCreationSuccess = (response: Response, message: string = 'Compte créé') => {
    response.status(201).json({ message });
};

//Response that is sent if an upload is successfully done
export const sendUploadSuccess = (response: Response, message: string = 'Publication effectué') => {
    response.status(201).json({ message });
};
