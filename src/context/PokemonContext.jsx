import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

const url = "https://668348574102471fa4c9a4b2.mockapi.io/pokemon-save/saved";

const PokemonContextReducer = createContext();

const initialState = {
  // status: false,
  saved: [],
};

const PokemonContextProvider = (state, action) => {
  switch (action.type) {
    case "GET_POKEMONS":
        return {
          ...state,
          saved: action.payload,
        }
      case "ADD_POKEMONS":
        return {
          ...state,
          saved: [...state.saved, action.payload],
        }
    default:
      return state;
  }
};

const PokemonContext = ({ children }) => {
  const [pokemons, dispatch] = useReducer(PokemonContextProvider, initialState);

  const getPokemons = async () => {
    const response = await axios(url);
    dispatch({
      type: "GET_POKEMONS",
      payload: response.data,
    });
  };

  const addPokemons = async (inputPokemon) => {
    const response = await axios.post(url, inputPokemon);
    dispatch({
      type: "ADD_POKEMONS",
      payload: response.data,
    })
  }

  return (
    <div>
      <PokemonContextReducer.Provider value={{ pokemons, dispatch, getPokemons, addPokemons }}>
        {children}
      </PokemonContextReducer.Provider>
    </div>
  );
};

export const usePokemons = () => useContext(PokemonContextReducer);
export default PokemonContext;
