import React, { useState, useEffect } from "react";

import pokemonInfo  from "../../../scripts/js/objects/pokemonInfos";
import pokemonSkill from "../../../scripts/js/objects/pokemonSkill";

import { getPokemon } from "../../../scripts/js/services/getPokemon";
import { getDesc } from "../../../scripts/js/services/getDesc";
import { getAbilitieDescs } from "../../../scripts/js/services/getAbilitie";

import { Main } from "../../main";

import { Info } from "../info";
import { Skills } from "../skills";

export const MainDetails = ({name}) => {
   const [ pokemon, setPokemon] = useState(undefined)

   const [ pokemonInfos, setPokemonInfos] = useState({})
   const [ pokemonSkills, setPokemonSkills] = useState({})

   useEffect(() => {
      const getDetails = async() =>{
         const pokemon = await getPokemon(name)
         const desc = await getDesc(name)
         const abilities = await Promise.all(pokemon.abilities.map(abilitie => getAbilitieDescs(abilitie.ability.name)));

         setPokemon(pokemon)
         pokemonInfo.setInfos(pokemon, desc)
         pokemonSkill.setSkills(pokemon, abilities)
      }
      
      getDetails() 
   }, [])

   useEffect(()=>{
      if(pokemon !== undefined) {
         setPokemonInfos(pokemonInfo)

         setPokemonSkills(pokemonSkill)
      }
   }, [pokemon])

   return(
      <Main>
         <Info pokemon={pokemonInfos}/>

         <Skills pokemon={pokemonSkills}/>
      </Main>
   )
}