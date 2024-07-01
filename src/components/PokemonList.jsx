import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import NotFound from "./NotFound";

const PokemonList = (props) => {
  const { searchPokemon } = props;
  const [search, setSearch] = useState(searchPokemon);

  useEffect(() => {
    setSearch(searchPokemon);
  }, [searchPokemon]);

  return (
    <>
      <div className="pokemon-section">
        {search.length > 0 ? (
          search.map((item, index) => (
            <PokemonCard
              name={item.name}
              imageUrl={item.imageUrl}
              types={item.types}
              color={item.color}
              description={item.description}
              key={item.id}
            />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default PokemonList;
