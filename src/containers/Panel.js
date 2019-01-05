import styled, { css }from 'styled-components';


export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 115px auto auto auto;
  width: 1020px;
  height: 680px;
  box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.21), inset 0 2px 7px 1px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  
  
  ${props => css`
   
     ${props.regwindow && css`
         
         height: 120vh;
         &:hover {
             border-color: purple;
         }
  `}
  `}
  `