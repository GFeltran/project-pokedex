import styled from "styled-components";
import React, { useContext } from "react";

import { DetailsContext } from "../../../contexts/details-context";
import { Photo } from "../../photo";
import { Details } from "../../detail";

export const Info = ({pokemon}) => {
   const { color } = useContext(DetailsContext)

   return (
      <Section color={color !== null ? color : '1d1d1d'}>
         <Photo male={pokemon.imageM} female={pokemon.imageF} />

         <Details 
            id={pokemon.id} 
            name={pokemon.name} 
            height={pokemon.height} 
            weight={pokemon.weight} 
            desc={pokemon.desc}
            type={pokemon.types}
            />
      </Section>
   )
}

const Section = styled.section`
   grid-area: infos;
   display: flex;
   justify-content: space-around;
   align-items: center;

   background: #${props => props.color};
`