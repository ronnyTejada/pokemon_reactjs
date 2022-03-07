import React from "react";
import { List, List_Item } from "../styled_components/styled";

function Suggestions({
  suggestions,
  pokemons,
  setPokemonWanted,
  search,
  filter,
  favoritesPokemons,
}) {
  const getSearchPokemon = async (search_) => {
    if (filter !== "favorites") {
      search(search_);
      let pkm = pokemons.filter((pkm) => pkm.name === search_);
      setPokemonWanted(pkm);
    } else {
      search(search_);
      let pkm = favoritesPokemons.filter((pkm) => pkm.name === search_);
      setPokemonWanted(pkm);
    }
  };

  return (
    <>
      {suggestions.length > 0 && (
        <List>
          {suggestions.map((pkm) => {
            return (
              <List_Item onClick={() => getSearchPokemon(pkm.name)}>
                {pkm.name}
              </List_Item>
            );
          })}
        </List>
      )}
    </>
  );
}

export default Suggestions;
