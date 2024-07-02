import React, { useEffect, useState } from "react";
import pokemonJson from "../assets/data.json";
import PokemonCard from "./PokemonCard";
import NotFound from "./NotFound";

const FilterAtoZ = (props) => {
  const { searchPokemon } = props;
  const [pokemon, setPokemon] = useState(searchPokemon);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filter = pokemon.slice();
    const sorting = filter.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setFiltered(sorting);
    setPokemon(searchPokemon);
  }, [searchPokemon]);

  return (
    <div className="pokemon-section">
      {filtered.length > 0 ? (
        filtered.map(item => (
            <PokemonCard
              name={item.name}
              imageUrl={item.imageUrl}
              types={item.types}
              color={item.color}
              description={item.description}
              key={item.id}
              id={item.id}
            />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default FilterAtoZ;
