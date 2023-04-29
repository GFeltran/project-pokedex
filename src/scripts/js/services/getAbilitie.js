import { url } from "../variables";

async function getAbilitieDescs(abilitie){
   const response = await fetch(`${url}/ability/${abilitie}`);
   const data = await response.json();

   return await data.flavor_text_entries[0].flavor_text;
}

export { getAbilitieDescs }