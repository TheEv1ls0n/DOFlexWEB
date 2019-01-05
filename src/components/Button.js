import styled, { css }from 'styled-components';

export const Button = styled.button`
  flex: 0 1 372px;
  display: flex;
  height: 60px;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.18);
  background-color: #e8e8e8;
  border: 1px solid black;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
\`;
  &:hover {
    border-color: white;
  }
  
  ${props => css`
  
    ${props.sign && css`
        border-radius: 10px;
        background-color: #555555;
        color: white;
        margin-top: 80px;
        width: 150px;
        flex: 0 1 60px;
        &:hover {
            border-color: purple;
        }
    `}
        
    ${props.create && css`
        border-radius: 10px;
        background-color: #555555;
        color: white;
        margin-top: 80px;
        width: 300px;
        flex: 0 1 80px; /*changes height of button*/
        &:hover {
            border-color: purple;
        }
    `}
  `}
`;

export const Txt = styled.a`
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 400;
`


