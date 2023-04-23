import React,  { useEffect, useState } from "react";
import styled from "styled-components";

import { CardPokemon } from "../card-pokemon";
import { AddButton } from "../add-button";

import background from '../../image/pokeball-bg.png'

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
         
      setPokemons([...pokemons, ...data])
   }

   return(
      <Container>
         <PokeList>
            <CardList list={pokemons}/>      
         </PokeList>

         <AddButton event={addPokemon}/>
      </Container>
   );
};

const Container = styled.div`
   position: relative;
   background: #94e5ff;
   min-height: 100vh;
   
   :before{
      position: fixed;
      content: '';
      background:url(${background}) no-repeat center;
      background-size: 100%;
      min-width: 100%;
      min-height: 100%;
      opacity: .5;
   }
`

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