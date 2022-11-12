//Imports
import { useRef } from 'react';
import { StyledContainer, StyledPopup, StyledHalfLeft, StyledHalfRight, StyledPreview, StyledActions } from './style';
import defaultPizzaPreview from '../../assets/default_pizza_preview.png';
import { useClickOutside } from '../../utils/hooks/index';

//Component
function PizzaDetails({ pizza, setSelectedPizza }) {
    const preview = pizza.imageURL === 'null' ? defaultPizzaPreview : pizza.imageURL;
    const price = pizza.price / 100;
    const refPopup = useRef();
    const onClickOutside = () => {
        setSelectedPizza(-1);
    };
    useClickOutside(refPopup, onClickOutside);

    //Render
    return (
        <StyledContainer>
            <StyledPopup ref={refPopup}>
                <StyledHalfLeft>
                    <h2>{pizza.name}</h2>
                    <StyledPreview>
                        <img src={preview} alt="Illustration de cette pizza" />
                    </StyledPreview>
                </StyledHalfLeft>
                <StyledHalfRight>
                    <p className="uploader">Proposé par {pizza.uploaderEmail}</p>
                    <p className="price">{price.toFixed(2)}€</p>
                    <p className="ingredients">
                        <em>Ingrédients principaux :</em>
                        <br />
                        {pizza.ingredients}
                    </p>
                    <StyledActions>
                        <button onClick={() => {}}>MODIFIER</button>
                        <button onClick={() => {}}>SUPPRIMER</button>
                        <button onClick={onClickOutside}>RETOUR</button>
                    </StyledActions>
                </StyledHalfRight>
            </StyledPopup>
        </StyledContainer>
    );
}

//Exports
export default PizzaDetails;
