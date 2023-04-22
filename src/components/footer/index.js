import styled from 'styled-components';

import { TogglerTheme } from '../toggler-theme';
import { Sociais } from '../sociais';

export const Footer = () => {
   return (
      <Style>
         <TogglerTheme />
         <Sociais />
      </Style>
   )
}

const Style = styled.footer`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 70px;
   width: 100%;
   padding: 15px 25px;
   border-top: 2px solid #ffffff;
   background: #1e1e1e;
`