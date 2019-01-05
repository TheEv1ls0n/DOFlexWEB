import styled, { css }from 'styled-components';

export  const Input = styled.input`
  display: inline-block;
  flex: 0 1 60px;
  vertical-align: center;
  text-decoration: none;
  width: 455px;
  border-radius: 10px;
  border: 1px solid #000000;
  margin-top: 54px; 
  font-size: 28px;
  transition: 0.1s;
  cursor: pointer;
  user-select: none;
   ${props => css`
  
    ${props.first && css`
        margin-top: 90px;
    `}
  `}
`;