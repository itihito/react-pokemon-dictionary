import { useEffect, useState } from "react";
import "./Card.css";
import {
  getPokemonAbilities,
  getPokemonName,
  getPokemonTypes,
} from "../../utils/pokemon";
import PropTypes from "prop-types";

const Card = ({ pokemon }) => {
  console.log("pokemon", pokemon);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonAbility, setPokemonAbility] = useState("");

  // ポケモン名を取得
  let pokemonNameURL = pokemon.species.url;
  const loadPokemonName = async (data) => {
    let jaName = await getPokemonName(data);
    setPokemonName(jaName);
  };

  // タイプを取得
  let pokemonTypeURLs = pokemon.types.map((v) => {
    let typesURL = v.type.url;
    return typesURL;
  });
  const loadPokemonType = async (typeURLs) => {
    const pokemonTypes = await getPokemonTypes(typeURLs);
    setPokemonType(pokemonTypes);
  };

  // 特性を取得;
  let pokemonAbilityURLs = pokemon.abilities.map((v) => {
    let abilityURL = v.ability.url;
    return abilityURL;
  });
  const loadPokemonAbility = async (data) => {
    let jaName = await getPokemonAbilities(data);
    setPokemonAbility(jaName);
  };

  useEffect(() => {
    loadPokemonName(pokemonNameURL);
    loadPokemonType(pokemonTypeURLs);
    loadPokemonAbility(pokemonAbilityURLs);
  }, []);

  function zeroPad(number, length) {
    return String(number).padStart(length, "0");
  }

  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="cardNo">No.{zeroPad(pokemon.id, 4)}</h3>
      <h3 className="cardName">{pokemonName}</h3>
      <div className="cardTypes">
        <span className="type">タイプ：</span>
        {pokemonType}
      </div>
      <div className="cardInfo">
        <div className="carData">
          <p>重さ：{(pokemon.weight / 10).toFixed(1)}kg</p>
        </div>
        <div className="carData">
          <p>高さ：{(pokemon.height / 10).toFixed(1)}m</p>
        </div>
        <div className="carData">
          <p>特性：{pokemonAbility}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  pokemon: PropTypes.object,
};

export default Card;
