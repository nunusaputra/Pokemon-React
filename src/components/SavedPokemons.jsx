import React, { useEffect, useState } from "react";
import { usePokemons } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";
import NotFound from "./NotFound";

const SavedPokemons = () => {
  const { pokemons, getPokemons } = usePokemons();
  const { saved } = pokemons;
  //   console.log(pokemons);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="pokemon-section">
      {saved.length > 0 ? (
        saved.map((item) => (
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

export default SavedPokemons;
