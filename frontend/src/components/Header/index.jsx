//Imports
import { StyledHeader } from './style';
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
            redirect('/login', { replace: true });
        } else {
            redirect('/', { replace: true });
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
            {token !== 'null' ? (
                <button
                    onClick={() => {
                        setToken('null');
                    }}
                >
                    Se déconnecter
                </button>
            ) : null}
        </StyledHeader>
    );
}

//Exports
export default Header;
