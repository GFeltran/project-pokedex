import { getLinks } from "./getLinks";

async function getPokemons(id, howmany) {
   const links = await getLinks(id, howmany);

   const pokemons = await Promise.all(
      links.map(async url =>{
         const response = await fetch(url);
         const data = await response.json();
         return data
   }) )
   
   return pokemons;
}

export { getPokemons }