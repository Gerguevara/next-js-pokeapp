const toggleFavorite = (id: number) => {
  console.log("toogle Favorite invocado");
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites.includes(id);
}


const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

//exportara las funciones wrapeadas en un objeto tomado como default y luego es renombrado en el index
export default { toggleFavorite, existInFavorites, pokemons   };
