import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { DetailsProvider } from "../contexts/details-context";
import { MenuDetails } from "../components/components-details/menu-details";
import { MainDetails } from "../components/components-details/main-details";

const PokemonDetails = () => {
   const { id } = useParams();

   return(
      <DetailsProvider>
         <Style>
            <MenuDetails/> 

            <MainDetails name={id} />
         </Style>
      </DetailsProvider>
   )
}

const Style = styled.div`
   min-height: 100vh;
   display: grid;
   grid-template-areas: "aside main";
   grid-template-columns: 300px 1fr;

   main{
      display: grid;
      grid-template-areas: "infos"
                           "others";
      grid-template-rows: auto auto;
   }

   @media (max-width: 930px) {
      grid-template-areas: "aside"
                           "main";
      grid-template-columns: auto;
      grid-template-rows: auto 1fr;

      main {
         grid-template-rows: auto 1fr;
      }
   }

`

export default PokemonDetails;