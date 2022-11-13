//Exports
export interface Response {
    [key: string]: any;
}

export const generateId = (dbArray) => {
    if (dbArray.length > 0) {
        const lastElement = dbArray[dbArray.length - 1];
        return lastElement.id + 1;
    } else {
        return 0;
    }
};

export const addToDatabase = (element, dbArray) => {
    dbArray.push(element);
};

export const removeFromDatabase = (elementId, dbArray) => {
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

export const modifyOnDatabase = (newElement, dbArray) => {
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
