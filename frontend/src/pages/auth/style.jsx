//Imports
import styled from 'styled-components';
import colors from '../../utils/style/colors';

//Exports
export const StyledForm = styled.form`
    background-color: ${colors.backgroundDarker};
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 620px;
    margin: auto;
    margin-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 60px;
    padding-bottom: 20px;
`;

export const StyledOtherAuth = styled.span`
    color: white;
    background-color: ${colors.backgroundDarkest};
    border-radius: 10px;
    padding: 8px;
    margin-top: 36px;
`;
