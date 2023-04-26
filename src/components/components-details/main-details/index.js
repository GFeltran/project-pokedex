import React, { useState, useEffect } from "react";

import { Main } from "../../main";

import { Info } from "../info";
import { Skills } from "../skills";

async function getPokemon(id) {
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
   return await response.json();
}

async function getDesc(id) {
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
   const data = await response.json();

   return await data.flavor_text_entries[0].flavor_text;
}

async function getDescsAbilitie(abilitie){
   const response = await fetch(`https://pokeapi.co/api/v2/ability/${abilitie}`);
   const data = await response.json();

   return await data.flavor_text_entries[0].flavor_text;
}

export const MainDetails = ({name}) => {
   const [ pokemon, setPokemon] = useState(undefined)
   const [ pokeDesc, setPokeDesc] = useState(undefined)
   const [ pokemonInfos, setPokemonInfos] = useState({})
   const [ pokemonSkills, setPokemonSkills] = useState({})
   const [ abilitieDesc, setAbilitieDesc ] = useState([])

   useEffect(() => {
      const get = async() =>{
         const data = await getPokemon(name)
         const desc = await getDesc(name)
         const abilities = await Promise.all(data.abilities.map(abilitie => getDescsAbilitie(abilitie.ability.name)));

         setPokeDesc(desc)
         setPokemon(data)
         setAbilitieDesc(abilities)
      }
      
      get()
   }, [])

   useEffect(()=>{
      if(pokemon !== undefined) {
         setPokemonInfos({
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types,
            imageM: pokemon.sprites.front_default,
            imageF: pokemon.sprites.front_female,
            desc: pokeDesc
         })

         setPokemonSkills({
            abilities: pokemon.abilities.map(abilitie => abilitie.ability.name),
            moves: pokemon.moves.map(move => move.move.name),
            descs: abilitieDesc
         })
      }
   }, [pokemon])

   return(
      <Main>
         <Info pokemon={pokemonInfos}/>

         <Skills pokemon={pokemonSkills}/>
      </Main>
   )
}