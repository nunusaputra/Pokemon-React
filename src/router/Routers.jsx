import React from "react";
import { Route, Routes } from "react-router-dom";
import Pokemon from "../components/Pokemon";
import DetailPokemon from "../components/DetailPokemon";
import SavedPokemons from "../components/SavedPokemons";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/pokemon-detail/:id" element={<DetailPokemon />} />
        {/* <Route path="/saved" element={<SavedPokemons />} /> */}
      </Routes>
    </div>
  );
};

export default Routers;
