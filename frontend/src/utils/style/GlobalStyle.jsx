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
    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 44px;
        font-weight: 900;
        color: ${colors.primary};
        text-shadow: 1px 1px 20px ${colors.secondary};
        i {
            font-size: 38px;
            margin-right: 8px;
            text-shadow: 1px 1px 20px ${colors.secondary};
        }
    }
    h2{
        font-family: 'Dancing Script', cursive;
        color: ${colors.tertiary};
        font-size: 32px;
        font-weight: bold;
        line-height: 1;
        padding-left: 12px;
        padding-right: 12px;
        margin-bottom: 24px;
    }
    h3{
        font-family: 'Dancing Script', cursive;
        font-size: 26px;
        font-weight: bold;
        line-height: 1;
        margin-bottom: 8px;
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
        margin-bottom: 4px;
        em{
            color:gray;
            font-style: italic;
            font-size: 15px;
        }
    }
    input {
        margin-bottom: 20px;
        border: none;
        border-radius: 10px;
        padding: 6px;
    }
    .price{
        position: absolute;
        top: 6px;
        right:6px;
        font-weight: bold;
    }
    .ingredients{
        font-style:italic;
        font-size: 16px;
    }
`;

//Exports

function GlobalStyle() {
    return <StyledGlobalStyle />;
}
export default GlobalStyle;
