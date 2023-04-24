import styled from "styled-components";
import React from "react";

import typeTest from '../../image/types-icons/electric.svg'

export const Type = () => {
   return(
      <Style>
         <img src={typeTest} alt="checkbox"></img>
         <p className="type">electric</p>
      </Style>
   )
}

const Style = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #f6bd20;
   padding: 10px;
   width: 25px;
   height: 25px;
   border-radius: 25px;
   cursor: pointer;
   transition: 0.3s;

   img {
      position: absolute;
      height: 65%;

   }

   p {
      display: none;
      margin-left: 20px;
   }

   :hover {
      justify-content: start;
      width: 90px;
      border-radius: 25px;
   }

   :hover p {
      display: block;
   }
`