import React from "react";
import { colours } from "../assets/colours";

const PokemonCard = (props) => {
  const { name, types, imageUrl, color, description } = props;
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
          <button style={{ backgroundColor: color}}>See Detail</button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
