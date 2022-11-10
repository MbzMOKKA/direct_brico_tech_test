//Imports
import styled from 'styled-components';
import colors from '../../utils/style/colors';

//Exports
export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 12%;
    padding-right: 12%;
    padding-top: 12px;
    padding-bottom: 12px;
    box-shadow: 0px 0px 15px gray;
`;

export const StyledAppName = styled.h1`
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
`;
