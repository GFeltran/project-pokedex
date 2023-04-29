import React, { useContext } from "react";
import styled  from "styled-components";

import { ThemeContext } from "../../contexts/theme-context";

export const AddButton = ({event}) =>{
   const { theme } = useContext(ThemeContext)

   return(
      <Button onClick={event} theme={theme}>
         <i className="fas fa-plus"></i>
      </Button>
   )
}


const Button = styled.button`
   position: fixed;
   bottom: 5px;
   right: 5px;
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background-color: #ffce31;
   border: 3px solid #30309a;
   color: #30309a;
   font-size: 2.5rem;
   transition: 0.3s ease-in-out;

   :hover{
      transform: scale(1.06);
   }
`