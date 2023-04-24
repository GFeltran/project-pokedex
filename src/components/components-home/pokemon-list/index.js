import React,  { useEffect, useState } from "react";
import styled from "styled-components";

import { Main } from "../../main";

import { CardPokemon } from "../card-pokemon";
import { AddButton } from "../../add-button";

const getLinks = async(id) => {
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${id}`)
   const data = await response.json()
   return data.results.map(link => link.url)
}

async function getPokemons(id) {
   const links = await getLinks(id);

   const pokemons = await Promise.all(
      links.map(async url =>{
         const response = await fetch(url);
         const data = await response.json();
         return data
   }) )
   
   return pokemons;
}

const CardList = ({list}) => {
   return(
      <>
         {
            list.map((pokemon, index) => {
               return(
                  <Li key={index}>
                     <CardPokemon name={pokemon.name} id={pokemon.id} image={pokemon.sprites.front_default}/>
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
         const data = await getPokemons(0)
         
         console.log(data)
         
         setPokemons([...pokemons, ...data])
      }

      initPokemon();
   }, []);

   async function addPokemon() {
      const data = await getPokemons(pokemons.length)
         
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