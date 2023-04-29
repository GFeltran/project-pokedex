import React,  { useEffect, useState } from "react";
import styled from "styled-components";

import { Main } from "../../main";

import { CardPokemon } from "../card-pokemon";
import { AddButton } from "../../add-button";

import { getPokemons } from "../../../scripts/js/services/getPokemons";

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
   const [ pokemons, setPokemons] = useState([])
   //const [ loading, setLoading ] = useState(true)

   useEffect(() => {
      const initPokemon = async() => {
         const data = await getPokemons(0, 20)
         
         setPokemons([...data])
      }

      initPokemon();
   }, []);

   async function addPokemon() {
      const data = await getPokemons(pokemons.length, 20)
         
      setPokemons(p => [...p, ...data])
   }

   return(
      <Main>
         <PokeList>
            <CardList list={pokemons}/>
         </PokeList>   

         <AddButton event={addPokemon}/>
      </Main>
   );
};

const PokeList = styled.ul`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   height: 100%;
   padding: 5px;
   gap: 5px;
`

const Li = styled.li`
   display: flex;
   justify-content: center;}
`