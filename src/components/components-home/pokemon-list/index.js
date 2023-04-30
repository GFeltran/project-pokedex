import React,  { useEffect, useContext } from "react";
import styled from "styled-components";
import { HomeContext } from "../../../contexts/home-context";

import { Main } from "../../main";

import { CardPokemon } from "../card-pokemon";
import { AddButton } from "../../add-button";

const CardList = ({list}) => {
   return(
      <>
         {
            list.map((pokemon, index) => {
               return(
                  <Li key={index}>
                     <CardPokemon 
                        name={pokemon.name} 
                        id={pokemon.id} 
                        image={pokemon.sprites.front_default}
                     />
                  </Li>
               )
            })
         }
      </>
   )
}

export const PokemonsList = () => {
   const { pokemons, setPokemons, initPokemon } = useContext(HomeContext)
   //const [ loading, setLoading ] = useState(true)   

   useEffect(() => {
      initPokemon();

   }, []);

   
   return(
      <Main>
         <PokeList>
            <CardList list={pokemons}/>
         </PokeList>   

         <AddButton />
      </Main>
   );
};

const PokeList = styled.ul`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   height: 100%;
   padding: 5px;
   gap: 5px;

   @media (max-width: 930px) {
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
   }
`

const Li = styled.li`
   display: flex;
   justify-content: center;
`