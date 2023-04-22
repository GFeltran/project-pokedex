import React from "react";
import styled from "styled-components";

import { Pokemon } from "../pokemon";
import { AddButton } from "../add-button";

export const PokemonList = () => {
   return(
      <Container>
         <PokeList>
            <li><Pokemon /></li>
            <li><Pokemon /></li>
            <li><Pokemon /></li>
            <li><Pokemon /></li>
            <li><Pokemon /></li>
            <li><Pokemon /></li>
            <li><Pokemon /></li>
            <li><Pokemon /></li>
            <li><Pokemon /></li>
            <li><Pokemon /></li>
            <li><Pokemon /></li>
            <li><Pokemon /></li>
         </PokeList>
         <AddButton />
      </Container>
   );
};

const Container = styled.div`
   position: relative;
   background: #94e5ff;
   min-height: 100vh;
`

const PokeList = styled.ul`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   height: 100%;
   padding: 5px;
   gap: 5px;
   li{
      display: flex;
      justify-content: center;
   }
`