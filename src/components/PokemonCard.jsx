import React, { useState } from "react";
import { colours } from "../assets/colours";
import { Link } from "react-router-dom";
import { usePokemons } from "../context/PokemonContext";

const PokemonCard = (props) => {
  const {
    id,
    name,
    types,
    imageUrl,
    color,
    description,
    locations,
    abilities,
  } = props;
  const { addPokemons } = usePokemons();
  const [status, setStatus] = useState(false);
  // const [input, setInput] = useState()

  const handleSaved = () => {
    // e.preventDefault()

    const inputPokemon = {
      id,
      name,
      types,
      imageUrl,
      color,
      description,
      locations,
      abilities,
    };
    addPokemons(inputPokemon);
    setStatus(true);
  };
  return (
    <div className="cards" style={{ background: color }}>
      <div className="card-img">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="card-info">
        <h3 className="pokemon-name">{name}</h3>
        <div className="card-type">
          {types.map((item, index) => (
            <span
              key={index}
              style={{ backgroundColor: colours[item.toLowerCase()] }}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="description">
          <p>{description}</p>
          <div className="desc-icon">
            <Link to={`/pokemon-detail/${id}`}>
              <button className="btn-see" style={{ backgroundColor: color }}>
                See Detail
              </button>
            </Link>
            <button className="btn-save" onClick={() => handleSaved()}>
              {status ? "😊" : "❤️"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
