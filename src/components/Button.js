import styled, { css }from 'styled-components';

export const Button = styled.div`
  padding: 20px 140px 20px 140px;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.18);
  background-color: #e8e8e8;
  border: 1px solid black;
  margin-bottom: 10px;
  font-family: "Nanum-Gothic-Coding, Mono-serif"; 
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  &:hover {
    border-color: white;
  }
  
  ${props => css`
  
    ${props.transparent && css`
        width: 167px;
        height: 16px;
        padding-top: 28px;
        padding-right: 144px;
        padding-bottom: 28px;
        padding-left: 144px
        border-radius: 10px;
        background-color: #555555;
        color: white;
        margin-top: 104px;
  
        &:hover {
            border-color: purple;
        }
    `}
  `}
`;
