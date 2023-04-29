import { url } from "../variables";

async function getPokemon(id) {
   const response = await fetch(`${url}/pokemon/${id}`)
   return await response.json();
}

export { getPokemon }