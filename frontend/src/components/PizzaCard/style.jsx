//Imports
import styled from 'styled-components';
import colors from '../../utils/style/colors';

//Exports
export const StyledCard = styled.li`
    background-color: ${colors.backgroundDarker};
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px;
    overflow: hidden;
    :hover {
        cursor: pointer;
        img {
            width: 110%;
        }
    }
    @media (min-width: 900px) {
        width: 40%;
    }
`;

export const StyledImage = styled.div`
    position: relative;
    width: 100%;
    height: 260px;
    overflow: hidden;
    img {
        transition-duration: 500ms;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const StyledInfos = styled.div`
    position: relative;
    width: 100%;
    padding: 12px;
    padding-top: 6px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
    h3 {
        padding-right: 54px;
    }
    .price {
        position: absolute;
        top: 8px;
        right: 8px;
    }
    .ingredients {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;
