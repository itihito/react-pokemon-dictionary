export const getAllPokemon = async (url) => {
  try {
    const response = await fetch(url);
    const resJson = await response.json();
    return resJson;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemon = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonName = async (url) => {
  try {
    const response = await fetch(url);
    let result = await response.json();
    return result.names.find((name) => name.language.name === "ja").name;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonTypes = async (typeURLs) => {
  try {
    let _pokemonType = await Promise.all(
      typeURLs.map(async (typeURL) => {
        let response = await fetch(typeURL);
        const pokemonTypeDetail = await response.json();
        let jaName = pokemonTypeDetail.names.find(
          (name) => name.language.name === "ja"
        ).name;
        return jaName;
      })
    );
    let joinedTypes = _pokemonType.join(" / ");

    return joinedTypes;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonAbilities = async (abilityURLs) => {
  try {
    let _pokemonType = await Promise.all(
      abilityURLs.map(async (typeURL) => {
        let response = await fetch(typeURL);
        const pokemonAbilityDetail = await response.json();
        let jaName = pokemonAbilityDetail.names.find(
          (name) => name.language.name === "ja"
        ).name;
        return jaName;
      })
    );
    let joinedTypes = _pokemonType.join(" / ");

    return joinedTypes;
  } catch (err) {
    console.log(err);
  }
};
