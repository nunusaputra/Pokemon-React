import React, { useState } from "react";
import PokemonList from "./PokemonList";
import dataPokemon from "../assets/data.json";
import FilterAtoZ from "./FilterAtoZ";
import FilterZtoA from "./FilterZtoA";
import SavedPokemons from "./SavedPokemons";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(dataPokemon);
  const [searchResult, setSearchResult] = useState(dataPokemon);
  const [tab, setTab] = useState("pokemon");

  const handleSearch = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    const search = pokemon.filter((item) =>
      item.name.toLowerCase().includes(lowerCase)
    );
    setSearchResult(search);
  };

  return (
    <div className="container">
      <div className="container-heading">
        <h1>Let's find your</h1>
        <h1>
          favorite <span>pokemon</span>
        </h1>
      </div>
      <div className="search">
        <input type="text" onChange={handleSearch} />
      </div>

      <div className="filter">
        <button onClick={() => setTab("pokemon")}>Normal</button>
        <button onClick={() => setTab("AtoZ")}>A - Z</button>
        <button onClick={() => setTab("ZtoA")}>Z - A</button>
        <button onClick={() => setTab("saved")}>Saved</button>
      </div>

      {tab === "pokemon" && <PokemonList searchPokemon={searchResult} />}
      {tab === "AtoZ" && <FilterAtoZ searchPokemon={searchResult} />}
      {tab === "ZtoA" && <FilterZtoA searchPokemon={searchResult} />}
      {tab === "saved" && <SavedPokemons searchPokemon={searchResult} />}
    </div>
  );
};

export default Pokemon;
