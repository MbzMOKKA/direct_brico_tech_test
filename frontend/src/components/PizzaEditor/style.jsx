//Imports
import styled from 'styled-components';
import colors from '../../utils/style/colors';

//Exports
export const StyledForm = styled.form`
    background-color: ${colors.backgroundDarker};
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 24px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    button {
        margin: auto;
        width: 50%;
    }
`;

export const StyleImagePreview = styled.img`
    background-color: ${colors.backgroundDarkest};
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 1);
    color: white;
    width: 20%;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export const StyledButtons = styled.div`
    display: flex;
    button {
        margin-left: 6px;
        margin-right: 6px;
    }
`;
