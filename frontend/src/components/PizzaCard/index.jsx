//Imports
import defaultPizzaPreview from '../../assets/default_pizza_preview.png';
import { StyledCard, StyledImage, StyledInfos } from './style';

//Component
function PizzaCard({ index, pizza, setSelectedPizza }) {
    const preview = pizza.imageURL === 'null' ? defaultPizzaPreview : pizza.imageURL;
    const price = pizza.price / 100;
    const selectPizza = () => {
        setSelectedPizza(index);
    };

    //Render
    return (
        <StyledCard
            onClick={() => {
                selectPizza();
            }}
        >
            <StyledImage>
                <img src={preview} alt="Illustration de cette pizza" />
            </StyledImage>
            <StyledInfos>
                <h3>{pizza.name}</h3>
                <p className="price">{price.toFixed(2)}€</p>
                <p className="ingredients">{pizza.ingredients}.</p>
            </StyledInfos>
        </StyledCard>
    );
}

//Exports
export default PizzaCard;
