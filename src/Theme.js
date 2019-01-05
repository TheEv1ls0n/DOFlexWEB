import { createGlobalStyle, css } from 'styled-components';
import normalize from 'normalize.css/normalize.css';

const globalStyles = css`
    * {
        font-family: "Nanum Gothic Coding", mono-serif;
    }
    
    input {
        text-align: center;
    }
    
`;


export const GlobalStyles = createGlobalStyle`${normalize} ${globalStyles}`