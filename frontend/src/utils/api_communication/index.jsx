//Imports
import axios from 'axios';

//Exports
export async function communicateWithAPI(url, verb, token, body, overwrittenConfig = null) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (overwrittenConfig !== null) {
        config = overwrittenConfig;
    }
    config.headers.Authorization = `Bearer ${token}`;
    let method = axios.get;
    switch (verb) {
        case 'POST':
            method = axios.post;
            break;
        case 'PUT':
            method = axios.put;
            break;
        case 'DELETE':
            method = axios.delete;
            break;
        default:
            break;
    }
    if (body === null) {
        return await method(url, config);
    } else {
        return await method(url, body, config);
    }
}

export async function submitRegister(token, setToken, email, password, name, surname) {
    try {
        const result = await communicateWithAPI('http://localhost:8000/api/auth/register', 'POST', token, {
            email,
            password,
            name,
            surname,
        });
        if (result.status === 201) {
            //account creation success
            submitLogIn(token, setToken, email, password);
        }
    } catch (error) {
        alert(error.response.data.message);
    }
}

export async function submitLogIn(token, setToken, email, password) {
    try {
        const result = await communicateWithAPI('http://localhost:8000/api/auth/login', 'POST', token, {
            email,
            password,
        });
        setToken(result.data.token);
    } catch (error) {
        alert(error.response.data.message);
    }
}

export async function getAllPizzas(token, setPizzas) {
    try {
        const result = await communicateWithAPI('http://localhost:8000/api/pizza', 'GET', token, null);
        setPizzas(result.data);
    } catch (error) {
        alert(error.response.data.message);
    }
}

export async function uploadPizza(token, setPizzas, name, price, imageURL, ingredients) {
    try {
        const result = await communicateWithAPI('http://localhost:8000/api/pizza', 'POST', token, {
            name,
            price,
            imageURL,
            ingredients,
        });
        setPizzas((prev) => {
            return [...prev, result.data];
        });
    } catch (error) {
        alert(error.response.data.message);
    }
}

export async function deletePizza(token, setPizzas, setSelectedPizza, pizzaId) {
    try {
        const result = await communicateWithAPI(`http://localhost:8000/api/pizza/${pizzaId}`, 'DELETE', token, null);
        if (result.status === 200) {
            setSelectedPizza(-1);
            getAllPizzas(token, setPizzas);
        }
    } catch (error) {
        alert(error.response.data.message);
    }
}

export async function modifyPizza(token, setPizzas, pizzaId, name, price, imageURL, ingredients) {
    try {
        const result = await communicateWithAPI(`http://localhost:8000/api/pizza/${pizzaId}`, 'PUT', token, {
            name,
            price,
            imageURL,
            ingredients,
        });
        if (result.status === 200) {
            getAllPizzas(token, setPizzas);
        }
    } catch (error) {
        alert(error.response.data.message);
    }
}
