//Imports
import { useState, useEffect, useContext } from 'react';
import { StyledHome, StyledList } from './style';
import { getAllPizzas } from '../../utils/api_communication/index';
import { SessionContext } from '../../utils/context/index';
import PizzaCard from '../../components/PizzaCard/index';
import PizzaUploader from '../../components/PizzaUploader/index';
import PizzaDetails from '../../components/PizzaDetails/index';

//Component
function Home() {
    const [pizzas, setPizzas] = useState([]);
    const [selectedPizza, setSelectedPizza] = useState(-1);
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
                {pizzas?.map((pizza, index) => {
                    return <PizzaCard key={pizza.id} pizza={pizza} index={index} setSelectedPizza={setSelectedPizza} />;
                })}
            </StyledList>
            <h2>Ajouter une pizza</h2>
            <PizzaUploader token={token} setPizzas={setPizzas} />
            {selectedPizza !== -1 ? <PizzaDetails pizza={pizzas[selectedPizza]} setSelectedPizza={setSelectedPizza} setPizzas={setPizzas} /> : null}
        </StyledHome>
    );
}

//Exports
export default Home;
