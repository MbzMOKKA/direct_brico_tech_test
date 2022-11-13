//Imports
import defaultPizzaPreview from '../../assets/default_pizza_preview.png';
import { useRef, useContext, useState } from 'react';
import { StyledContainer, StyledPopup, StyledHalfLeft, StyledHalfRight, StyledPreview, StyledActions } from './style';
import { deletePizza } from '../../utils/api_communication/index';
import { useClickOutside } from '../../utils/hooks/index';
import { SessionContext } from '../../utils/context/index';
import PizzaEditor from '../PizzaEditor/index';

//Component
function PizzaDetails({ pizza, setSelectedPizza, setPizzas }) {
    const { token } = useContext(SessionContext);
    const [editMode, setEditMode] = useState(false);
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
                {editMode ? (
                    <PizzaEditor pizza={pizza} token={token} setPizzas={setPizzas} setEditMode={setEditMode} />
                ) : (
                    <>
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
                                <button
                                    onClick={() => {
                                        setEditMode(true);
                                    }}
                                >
                                    MODIFIER
                                </button>
                                <button
                                    onClick={() => {
                                        deletePizza(token, setPizzas, setSelectedPizza, pizza.id);
                                    }}
                                >
                                    SUPPRIMER
                                </button>
                                <button onClick={onClickOutside}>RETOUR</button>
                            </StyledActions>
                        </StyledHalfRight>
                    </>
                )}
            </StyledPopup>
        </StyledContainer>
    );
}

//Exports
export default PizzaDetails;
