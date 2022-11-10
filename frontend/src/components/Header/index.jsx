//Imports
import { StyledHeader, StyledAppName } from './style';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../../utils/context';

//Component
function Header() {
    const { token, setToken } = useContext(SessionContext);
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
            <StyledAppName>
                <i className="fa-solid fa-pizza-slice" />
                Pizzaz
            </StyledAppName>
            {token}
        </StyledHeader>
    );
}

//Exports
export default Header;
