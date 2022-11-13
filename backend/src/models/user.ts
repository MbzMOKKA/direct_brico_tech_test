interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    surname: string;
}

export let users: User[] = [
    {
        id: 0,
        email: 'test@gmail.com',
        password: '$2b$11$.G6damk/Gtkx4RZZyeFm4Otdyilbnv3b7Pg9fP0tTHf7JzThI8YR.',
        name: 'PrénomTest',
        surname: 'NomTest',
    },
];
