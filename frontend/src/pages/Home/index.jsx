//Imports
import { useState, useEffect, useContext } from 'react';
import { StyledHome, StyledList } from './style';
import { getAllPizzas } from '../../utils/api_communication/index';
import { SessionContext } from '../../utils/context/index';
import PizzaCard from '../../components/PizzaCard/index';

//Component
function Home() {
    const [pizzas, setPizzas] = useState();
    const { token } = useContext(SessionContext);

    useEffect(() => {
        getAllPizzas(token, setPizzas);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Render
    return (
        <StyledHome>
            <h2>Pizzas des utilisateurs</h2>
            <StyledList>
                {pizzas?.map((pizza) => {
                    return <PizzaCard key={pizza.id} pizza={pizza} />;
                })}
            </StyledList>
        </StyledHome>
    );
}

//Exports
export default Home;
