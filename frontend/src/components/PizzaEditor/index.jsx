//Imports
import defaultPizzaPreview from '../../assets/default_pizza_preview.png';
import { modifyPizza } from '../../utils/api_communication/index';
import { useRef, useState } from 'react';
import { StyledForm, StyleImagePreview, StyledButtons } from './style';

//Component
function PizzaEditor({ pizza, token, setPizzas, setEditMode }) {
    const refName = useRef();
    const refImageURL = useRef();
    const refPrice = useRef();
    const refIngredients = useRef();
    const [pizzaPreview, setPizzaPreview] = useState(defaultPizzaPreview);
    if (pizza.imageURL !== 'null' && pizza.imageURL !== pizzaPreview) {
        setPizzaPreview(pizza.imageURL);
    }

    //Render
    return (
        <StyledForm>
            <label htmlFor="input-name">Nom</label>
            <input id="input-name" type="text" defaultValue={pizza.name} ref={refName}></input>
            <label htmlFor="input-image">
                URL de la miniature <em>(*Facultatif)</em>
            </label>
            <input
                id="input-image"
                type="url"
                ref={refImageURL}
                defaultValue={pizza.imageURL}
                onChange={() => {
                    const newURL = refImageURL.current.value;
                    if (newURL === '') {
                        setPizzaPreview(defaultPizzaPreview);
                    } else {
                        setPizzaPreview(newURL);
                    }
                }}
            ></input>
            <StyleImagePreview src={pizzaPreview} alt="Aperçu de la miniature de votre pizza" content={pizzaPreview} />
            <label htmlFor="input-price">
                Coût <em>(entre 5€ et 20€)</em>
            </label>
            <input id="input-price" type="number" defaultValue={pizza.price / 100} min="5.00" max="20" step="0.5" ref={refPrice}></input>
            <label htmlFor="input-ingredients">
                Ingrédients principaux <em>(*Facultatif)</em>
            </label>
            <textarea id="input-ingredients" defaultValue={pizza.ingredients} rows="3" maxLength="300" ref={refIngredients} />
            <StyledButtons>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setEditMode(false);
                    }}
                >
                    ANNULER
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        modifyPizza(token, setPizzas, pizza.id, refName.current.value, refPrice.current.value, refImageURL.current.value, refIngredients.current.value).then(() => {
                            setEditMode(false);
                        });
                    }}
                >
                    APPLIQUER
                </button>
            </StyledButtons>
        </StyledForm>
    );
}

//Exports
export default PizzaEditor;
