import { url } from "../variables"

export const getLinks = async(id, howmany) => {
   const response = await fetch(`${url}/pokemon?limit=${howmany}&offset=${id}`)
   const data = await response.json()
   return data.results.map(link => link.url)
}
