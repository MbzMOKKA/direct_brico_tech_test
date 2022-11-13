//Imports
import styled from 'styled-components';
import { animPopupAppear } from '../../utils/style/animation';

//Exports
export const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledPopup = styled.div`
    animation: ${animPopupAppear} 400ms ease-out;
    background-color: white;
    box-shadow: 0px 2px 48px gray;
    border-radius: 25px;
    display: flex;
    width: 60%;
    height: 50%;
    overflow: hidden;
`;

export const StyledHalfLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 0px 12px black;
    h2 {
        margin: auto;
        font-size: 56px;
    }
`;

export const StyledHalfRight = styled.div`
    width: 50%;
    padding: 28px;
    .uploader {
        margin-bottom: 12px;
    }
    .price {
        font-size: 24px;
        margin-bottom: 12px;
    }
    .ingredients {
        padding-top: 6px;
        border-top: 1px gray solid;
        line-height: 2;
        word-break: break-all;
        em {
            font-weight: bold;
            font-style: normal;
        }
    }
`;

export const StyledPreview = styled.div`
    width: 100%;
    height: 85%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const StyledActions = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    button {
        width: 100%;
        margin-top: 12px;
    }
`;
