//Imports
import { StyledHeader } from './style';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../../utils/context';

//Component
function Header() {
    const { token } = useContext(SessionContext);
    const redirect = useNavigate();

    //Redirect to register page if not logged-in
    useEffect(() => {
        if (token === 'null') {
            redirect('/register', { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    //Render
    return (
        <StyledHeader>
            <h1>
                <i className="fa-solid fa-pizza-slice" />
                Pizzaz
            </h1>
            {token}
        </StyledHeader>
    );
}

//Exports
export default Header;
