import { Link } from "react-router-dom";
import React, {useContext} from "react";
import styled from "styled-components";

import { ThemeContext } from "../../contexts/theme-context";
import { Logo } from "../logo";

export const Header = (props) =>{
   const { theme } = useContext(ThemeContext)

   return(
      <Style className="header" theme={theme}>
         <Link to='/'>
            <Logo />
         </Link>

         {props.children}
      </Style>
   )
}

const Style = styled.header`
   grid-area: header;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 10px 25px 0;
   background-color: ${props => props.theme.primaryColor};

   @media (max-width: 930px) {
      flex-direction: row;
      align-items: start;
      padding: 5px 25px;
   }
`