//Imports
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

//Render
const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: sans-serif;
        font-size: 18px;
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
`;

//Exports

function GlobalStyle() {
    return <StyledGlobalStyle />;
}
export default GlobalStyle;