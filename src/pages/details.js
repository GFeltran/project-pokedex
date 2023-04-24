import React from "react";
//import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Main } from "../components/main";
import { MenuDetails } from "../components/components-details/menu-details";

import { Info } from "../components/components-details/info";
import { Skills } from "../components/components-details/skills/info";

const PokemonDetails = () => {
   //const { name } = useParams();

   return(
      <Container>
         <MenuDetails/> 

         <Main>
            <Info />

            <Skills />
         </Main>
      </Container>
   )
}

const Container = styled.div`
   min-height: 100vh;
   display: grid;
   grid-template-areas: "aside main";
   grid-template-columns: 300px 1fr;

   main{
      display: grid;
      grid-template-areas: "infos"
                           "others";
      grid-template-rows: 0.85fr 1.15fr;
   }
`

export default PokemonDetails;