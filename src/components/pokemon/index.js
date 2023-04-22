import React from "react";
import styled from "styled-components";

import pokemon from '../../image/test.png'
import background from '../../image/pokebola-aberta.png'

export const Pokemon = () => {
   return(
      <Pokebola href="#"> 
         <h2 id="poke-id" className="poke-id">#25</h2>

         <img src={pokemon} alt="Imagem pokemon" id="poke-image" className="poke-image"/>
         <h2 id="poke-name" className="poke-name">Pikachu</h2>
      </Pokebola>
   );
};

const Pokebola = styled.a`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   border: 2px solid #000000;
   height: 300px;
   width: 300px;
   background: #ffffff url(${background}) no-repeat center center;
   background-size: cover;
   cursor: pointer;

   .poke-id{
      position: absolute;
      top: 40px;
      left: 40px;
      border-radius: 50%;
      height: 50px;
      width: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 1.5rem;
      color: #ffffff;
      background: #ffce31;
   }

   .poke-image{
      height: 200px;
      width: 200px;
   }

   .poke-name{
      height: 50px;
      font-size: 4rem;
      color: #ffce31;
      -webkit-text-stroke-width: 2.4px;
      -webkit-text-stroke-color: #30309a;
   }
`