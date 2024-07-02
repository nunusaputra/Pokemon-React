import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import NotFound from "./NotFound";

const FilterZtoA = (props) => {
  const { searchPokemon } = props;
  const [pokemon, setPokemon] = useState(searchPokemon);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    const filter = pokemon.slice();
    const filtered = filter.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      } else if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
    setSorting(filtered);
    setPokemon(searchPokemon);
  }, [searchPokemon]);

  return (
    <div className="pokemon-section">
      {sorting.length > 0 ? (
        sorting.map((item) => (
          <PokemonCard
            name={item.name}
            imageUrl={item.imageUrl}
            types={item.types}
            description={item.description}
            color={item.color}
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

export default FilterZtoA;
