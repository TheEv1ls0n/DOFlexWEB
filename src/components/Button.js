import styled from 'styled-components';

export const Button = styled.a`
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  color: blue;
  border: 1px solid red;
  border-radius: 4px;
  padding-top: 7.5px;
  padding-right: 15px;
  padding-bottom: 7.5px;
  padding-left: 15px;
  transition: 0.1s;
  cursor: pointer;
  user-select: none;
  
  &:hover {
    border-color: black;
  }
`;
