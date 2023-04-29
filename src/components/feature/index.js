import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";
import React from "react";

export const Feature = ({icon, size, type}) => {
   return(
      <Style>
         <FontAwesomeIcon icon={icon}/>

         <p className="weight">
            {size} 
            <span>{type}</span> 
         </p>
      </Style>
   )
}

const Style = styled.div`
   display: flex;
   gap: 10px;
   padding: 10px 30px 10px 30px;
   border-left: 3px dashed ${props => props.theme.textColor};

   :first-child {
      border-left: none;    
   }
`