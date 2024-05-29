import { API_URL } from "@/app/config";
import { Cover, Data, GamesDatum } from "@/models/games.model";

export async function getGames(){
  console.log(`${API_URL}/api/videogames?populate=*`)
  try {
    const res = await fetch(`${API_URL}/api/videogames?populate=*`)
    if (!res.ok) {
      throw new Error(`${res.json() || res.statusText}`);
    }
    const {data} = await res.json()
    return data;
  } catch (error) {
    console.log(error)
    return [];
  }
}

export function getCoverImage ({attributes}: Data) {
  const {url} = attributes;
  return `${API_URL}${url}`
}