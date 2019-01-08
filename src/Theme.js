import { createGlobalStyle, css } from 'styled-components';
import normalize from 'normalize.css/normalize.css';

const globalStyles = css`
    * {
        font-family: "Nanum Gothic Coding", mono-serif;
    }
    
    input {
        text-align: center;
    }
    
    .panel{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto auto auto;
      width: 1020px;
      height: 100vh;
      box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.21), inset 0 2px 7px 1px rgba(0, 0, 0, 0.06);
      background-color: #ffffff;
  }
  .registration {
      all: inherit;
  }
`;


export const GlobalStyles = createGlobalStyle`${normalize} ${globalStyles}`