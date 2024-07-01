import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import dataJson from "../assets/data.json";
import { colours } from "../assets/colours";

const DetailPokemon = () => {
  const { id } = useParams();
  const dataId = parseInt(id);
  const [pokemon, setPokemon] = useState(dataJson);
  const data = pokemon.find((item) => item.id === dataId);
  const { name, imageUrl, types, color, description, locations, abilities } =
    data;
  return (
    <div className="container" style={{ backgroundColor: color }}>
      <h1 className="poke-heading">
        Get to know more <br /> about{" "}
        <Link to="/">
          <span>{name}</span>
        </Link>
      </h1>
      <div className="card-detail">
        <div className="pokemon-detail" style={{ background: color }}>
          <div className="detail-img">
            <img src={imageUrl} alt={name} />
          </div>

          <div className="parent-detail">
            <div className="detail-info">
              <div className="info">
                <h2 className="name-heading">Name</h2>
                <h3 className="name-item">{name}</h3>
              </div>
              <div className="info">
                <h2 className="location-heading">Location</h2>
                {locations.length > 0 ? (
                  locations
                    .filter((_, index) => index < 3)
                    .map((item, index) => (
                      <h1 className="location-item">{item}</h1>
                    ))
                ) : (
                  <p className="location-item">No location found...</p>
                )}
              </div>

              <div className="info">
                <h2 className="types-heading">Types</h2>
                {types.map((item, index) => (
                  <h1
                    className="types-item"
                    style={{ backgroundColor: colours[item.toLowerCase()] }}
                  >
                    {item}
                  </h1>
                ))}
              </div>
            </div>

            <div className="detail-info-2">
              <div className="detail-desc">
                <h2 className="desc-heading">Description</h2>
                <p className="desc-item">{description}</p>
              </div>

              <div className="info">
                <h2 className="stats-heading">Abilities</h2>
                {abilities.map((item, index) => (
                  <>
                    <h1 className="stats-item">{item.name}</h1>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPokemon;
