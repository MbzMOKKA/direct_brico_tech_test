//Imports
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

//Render
const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: sans-serif;
        box-sizing: border-box;
        font-size: 18px;
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
    main{
        padding-top: 28px;
    }
    h2{
        color: ${colors.tertiary};
        font-size: 22px;
        font-weight: bold;
        line-height: 1;
        padding-left: 12px;
        padding-right: 12px;
        margin-bottom: 24px;
    }
    a{
        color: ${colors.secondary};
    }
    button{
        color: white;
        border: none;
        background-color: ${colors.primary};
        box-shadow: 0px 1px 4px gray;
        padding: 6px;
        :hover{
            cursor: pointer;
            color: ${colors.primary};
            background-color: ${colors.secondary};
        }
    }
    label{
        font-style: italic;
        margin-bottom: 4px;
    }
    input {
        margin-bottom: 20px;
        border: none;
        border-radius: 10px;
        padding: 6px;
    }
`;

//Exports

function GlobalStyle() {
    return <StyledGlobalStyle />;
}
export default GlobalStyle;
