//Exports

export interface Response {
    [key: string]: any;
}

export const addToDatabase = (element, dbArray) => {
    dbArray.push(element);
};
