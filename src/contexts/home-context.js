import React, {createContext, useState} from "react";

import { getPokemons } from "../scripts/js/services/getPokemons";

export const HomeContext = createContext({});

export const HomeProvider = (props) => {
   const [ pokemons, setPokemons ] = useState([])

   const initPokemon = async() => {
      const data = await getPokemons(0, 20)
         
      setPokemons([...data])
   }

   async function addPokemon() {
      const data = await getPokemons(pokemons.length, 20)

      setPokemons(p => [...p, ...data])
   }


   return (
      <HomeContext.Provider value={{ pokemons, setPokemons, initPokemon, addPokemon }}>
         {props.children}
      </HomeContext.Provider>
   )
}