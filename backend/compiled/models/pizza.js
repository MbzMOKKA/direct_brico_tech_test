"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.find = exports.products = void 0;
exports.products = [
    {
        id: '54e4hy58de5z8x5g1z87a98c2hj2y',
        uploaderId: 's8g1y8n5r1x8b9y1e5zs6v2g',
        name: 'Royale',
        price: 1299,
        imageURL: 'none',
        ingredients: 'Tomate, Mozzarella, Oignon, Fromage, Jambon et Champignons.',
    },
];
const find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(exports.products))));
};
exports.find = find;
const findById = (id) => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(exports.products)).find((product) => product._id == id)));
};
exports.findById = findById;
