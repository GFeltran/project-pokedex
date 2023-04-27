import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useContext } from "react";

import { ThemeContext } from "../../../contexts/theme-context";

import undefined from '../../../image/undefined.png'

export const CardPokemon = ({id, name, image}) => {
   const {theme} = useContext(ThemeContext)

   return(
      <Pokebola theme={theme}> 
         <Link to={`/pokemon/${name}`}>
            <h2 id="poke-id" className="poke-id">{id}</h2>

            <img src={image} alt={`imagem ${name}`} id="poke-image" className="poke-image"/>
            <h2 id="poke-name" className="poke-name">{name}</h2>
         </Link>
      </Pokebola>
   );
};

CardPokemon.defaultProps = {
   name: '?',
   image: `${undefined}`,
   id: '---'
}

const Pokebola = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   border: 3px solid #30309a;
   height: 300px;
   width: 300px;
   background: #ffffff url(${props => props.theme.card}) no-repeat center center;
   background-size: cover;
   cursor: pointer;
   transition: 0.3s ease-in-out;

   :hover{
      background-color: #ffce31;
   }

   .poke-id{
      position: absolute;
      top: 40px;
      left: 35px;
      border-radius: 50%;
      height: 50px;
      width: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 1.5rem;
      color: #ffffff;
      background: #ffce31;
      transition: 0.3s ease-in-out;
   }

   :hover .poke-id{
      color: #000000;
      background: #ffffff;
   }

   .poke-image{
      height: 200px;
      width: 200px;
   }

   .poke-name{
      text-align: center;
      height: 50px;
      font-size: 4rem;
      color: #ffce31;
      -webkit-text-stroke-width: 2.4px;
      -webkit-text-stroke-color: #30309a;
   }
`