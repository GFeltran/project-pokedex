import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { Logo } from "../logo";

export const Header = (props) =>{
   return(
      <Style className="header">
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
   background-color: #ce181d;
`