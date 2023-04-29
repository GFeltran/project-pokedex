import { url} from "../variables";

async function getDesc(id) {
   const response = await fetch(`${url}/pokemon-species/${id}`);
   const data = await response.json();
   const descs = await await data.flavor_text_entries.filter(desc => desc.language.name === 'en');

   return await descs[0].flavor_text;
}

export { getDesc }