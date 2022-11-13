//Imports
import { keyframes } from 'styled-components';

//Exports

export const animLoadingSpinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const animErrorMsgAppear = keyframes`
    0% {
        transform: translateX(0px);
    }
    25% {
        transform: translateX(5px);
    }
    75% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0px);
    }
`;

export const animPopupAppear = keyframes`
    0% {
        transform: translateY(150px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;
