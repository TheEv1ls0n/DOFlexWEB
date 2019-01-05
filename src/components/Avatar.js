import styled, { css }from 'styled-components';

export const Avatar = styled.img`
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 50%;
  
  &:hover{
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
`