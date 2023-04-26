import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { MenuDetails } from "../components/components-details/menu-details";
import { MainDetails } from "../components/components-details/main-details";

const PokemonDetails = () => {
   const { id } = useParams();

   return(
      <Container>
         <MenuDetails/> 

         <MainDetails name={id} />
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