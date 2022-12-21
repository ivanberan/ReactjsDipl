import Sizes from "../constants/Sizes";

export const getData = async () => {
  try {
    const res = await fetch(`https://api.pokemontcg.io/v2/cards?pageSize=20`, {
      method: "GET",
      
      headers: {
        "X-API-KEY": "3bc13933-0aa4-4bec-89bd-a9ca5ae35bf2",
        Accept: "application/json",
        "Content-Type": "application/json",
      },

    });
    if (!res.ok) {
      throw "error";
    }
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e)
  }
};
