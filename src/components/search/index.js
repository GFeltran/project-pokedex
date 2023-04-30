import styled from "styled-components";
import React from "react";

import { InputSearch } from "../input-search";
import { Filter } from "../filter";

export const Search = () => {
   return (
      <Style>
         <InputSearch />

         <div className="filters">
            <Filter 
               title={'Types'}
               options={['bug', 'dark', 'dragon', 'eletric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']}
               size={'220px'}
            />

            <Filter 
               title={'Generetions'}
               options={['kanto', 'johto', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'galar', 'paldea']}
               size={'130px'}
            />
         </div>
      </Style>
   )
}

const Style = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;
   margin-top: 25px;
   width: 100%;
   height: 100%;
   gap: 15px;

   .filters {
      display: flex;
      flex-direction: column;
      gap: 15px;
      min-width: 100%;
   }

   @media (max-width: 930px) {
      margin-left: 15px;
   }
`