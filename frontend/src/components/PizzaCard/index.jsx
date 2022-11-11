//Imports
import defaultPizzaPreview from '../../assets/default_pizza_preview.png';
import { StyledCard, StyledImage, StyledInfos } from './style';

//Component
function PizzaCard({ pizza }) {
    const preview = pizza.imageURL === 'null' ? defaultPizzaPreview : pizza.imageURL;

    //Render
    return (
        <StyledCard>
            <StyledImage>
                <img src={preview} alt="Illustration de cette pizza" />
            </StyledImage>
            <StyledInfos>
                {' '}
                <h3>{pizza.name}</h3>
                <p className="price">{pizza.price / 100}€</p>
                <p className="ingredients">{pizza.ingredients}.</p>
            </StyledInfos>
        </StyledCard>
    );
}

//Exports
export default PizzaCard;
