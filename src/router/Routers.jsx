import React from "react";
import { Route, Routes } from "react-router-dom";
import Pokemon from "../components/Pokemon";
import DetailPokemon from "../components/DetailPokemon";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/pokemon-detail/:id" element={<DetailPokemon />} />
      </Routes>
    </div>
  );
};

export default Routers;
