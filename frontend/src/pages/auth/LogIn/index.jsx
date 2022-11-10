//Imports
import { Link } from 'react-router-dom';
import { StyledForm, StyledOtherAuth } from '../style';
import { submitLogIn } from '../../../utils/api_communication/index';
import { useContext, useRef } from 'react';
import { SessionContext } from '../../../utils/context/index';

//Component
function LogIn() {
    const { token, setToken } = useContext(SessionContext);
    const refEmail = useRef();
    const refPassword = useRef();

    //Render
    return (
        <StyledForm>
            <h2>
                Déjà membre ?<br />
                Connectez-vous !
            </h2>
            <label htmlFor="input-email">Adresse email</label>
            <input id="input-email" type="email" ref={refEmail}></input>
            <label htmlFor="input-password">Mot de passe</label>
            <input id="input-password" type="password" ref={refPassword}></input>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    submitLogIn(token, setToken, refEmail.current.value, refPassword.current.value);
                }}
            >
                SE CONNECTER
            </button>
            <StyledOtherAuth>
                Pas encore membre ?<br />
                <Link to="/register">Cliquez ici pour créer un compte !</Link>
            </StyledOtherAuth>
        </StyledForm>
    );
}

//Exports
export default LogIn;
