import styled from "styled-components";
import React from "react";

import background from '../../image/background/pokeball-bg.png'
import listStyle from '../../image/li-style.png'

export const SkillCard = ({title}) => {
   return (
      <Style>
         <h2>{`${title}:`}</h2>

         <List>
            <ul>
               <li>mega-punch</li>
               <li>pay-day</li>
               <li>thunder-punch</li>
               <li>...</li>
            </ul>
         </List>
      </Style>
   )
}

const Style = styled.div`
   display: grid;
   grid-template-rows: auto 1fr;

   border-radius: 10px;
   padding: 10px;
   width: 375px;
   height: 100%;
   
   color: #ffffff;
   background: #1d1d1d;

   h2 {
      font-size: 4rem;
   }
`

const List = styled.div`
   overflow: auto;
   font-size: 2.5rem;  
   max-height: 400px;
   padding: 5px;
   border-radius: 0 0 5px 5px ;
   border: 2px solid #fff;
   color: #000000;
   background: #94e5ff url(${background}) no-repeat center;
   background-size: cover;

   ul {
      list-style-position: inside;
      list-style-image: url(${listStyle}) ;
   }
`