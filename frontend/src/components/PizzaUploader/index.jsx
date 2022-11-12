//Imports
import defaultPizzaPreview from '../../assets/default_pizza_preview.png';
import { uploadPizza } from '../../utils/api_communication/index';
import { useRef, useState } from 'react';
import { StyledForm, StyleImagePreview } from './style';

//Component
function PizzaUploader({ token, setPizzas }) {
    const refName = useRef();
    const refImageURL = useRef();
    const refPrice = useRef();
    const refIngredients = useRef();
    const [pizzaPreview, setPizzaPreview] = useState(defaultPizzaPreview);

    //Render
    return (
        <StyledForm>
            <label htmlFor="input-name">Nom</label>
            <input id="input-name" type="text" ref={refName}></input>
            <label htmlFor="input-image">
                URL de la miniature <em>(*Facultatif)</em>
            </label>
            <input
                id="input-image"
                type="url"
                ref={refImageURL}
                onChange={() => {
                    const newURL = refImageURL.current.value;
                    if (newURL === '') {
                        setPizzaPreview(defaultPizzaPreview);
                    } else {
                        setPizzaPreview(newURL);
                    }
                }}
            ></input>
            <StyleImagePreview src={pizzaPreview} alt="Aperçu de la miniature de votre pizza" />
            <label htmlFor="input-price">
                Coût <em>(entre 5€ et 20€)</em>
            </label>
            <input id="input-price" type="number" min="5.00" max="20" step="0.5" ref={refPrice}></input>
            <label htmlFor="input-ingredients">
                Ingrédients principaux <em>(*Facultatif)</em>
            </label>
            <textarea id="input-ingredients" rows="3" maxLength="300" ref={refIngredients} />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    uploadPizza(token, setPizzas, refName.current.value, refPrice.current.value, refImageURL.current.value, refIngredients.current.value);
                }}
            >
                ENVOYER
            </button>
        </StyledForm>
    );
}

//Exports
export default PizzaUploader;
