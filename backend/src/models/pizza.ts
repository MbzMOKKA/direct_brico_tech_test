interface Pizza {
    id: number;
    uploaderEmail: string;
    name: string;
    price: number;
    imageURL: string;
    ingredients: string;
}

export let pizzas: Pizza[] = [
    {
        id: 0,
        uploaderEmail: 'test@gmail.com',
        name: 'Royale',
        price: 1250,
        imageURL: 'https://img.cuisineaz.com/660x660/2013/12/20/i95731-pizza-royale.jpg',
        ingredients: 'Tomate, Mozzarella, Oignon, Fromage, Jambon et Champignons',
    },
    {
        id: 1,
        uploaderEmail: 'test@gmail.com',
        name: '4 Fromages',
        price: 800,
        imageURL: 'https://recette.supertoinette.com/152868/b/pizza-4-fromages.jpg',
        ingredients: 'Cheddar, Compté, Mozzarella, Gorgonzola, Basilic',
    },
];
