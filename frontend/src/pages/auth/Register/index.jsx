//Imports
import { Link } from 'react-router-dom';
import { StyledForm, StyledOtherAuth } from '../style';
import { submitRegister } from '../../../utils/api_communication/index';
import { useContext, useRef } from 'react';
import { SessionContext } from '../../../utils/context/index';

//Component
function Register() {
    const { token, setToken } = useContext(SessionContext);
    const refEmail = useRef();
    const refPassword = useRef();
    const refName = useRef();
    const refSurname = useRef();

    //Render
    return (
        <StyledForm>
            <h2>
                Pas encore membre ?<br />
                Créez un compte !
            </h2>
            <label htmlFor="input-email">
                Adresse email <em>(doit contenir @)</em>
            </label>
            <input id="input-email" type="email" ref={refEmail}></input>
            <label htmlFor="input-password">
                Mot de passe <em>(8 caractères dont 1 nombre, 1 symbole, 1 minuscule et 1 majuscule)</em>
            </label>
            <input id="input-password" type="password" ref={refPassword}></input>
            <label htmlFor="input-name">Prénom</label>
            <input id="input-name" type="text" ref={refName}></input>
            <label htmlFor="input-surname">Nom de famille</label>
            <input id="input-surname" type="text" ref={refSurname}></input>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    submitRegister(token, setToken, refEmail.current.value, refPassword.current.value, refName.current.value, refSurname.current.value);
                }}
            >
                CRÉER MON COMPTE
            </button>
            <StyledOtherAuth>
                Déjà membre ?<br />
                <Link to="/login">Cliquez ici pour vous connecter !</Link>
            </StyledOtherAuth>
        </StyledForm>
    );
}

//Exports
export default Register;
