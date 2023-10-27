import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
// import Loading from "./components/Loading/Loading";
import Loading from "./components/Monsterball/Monsterball";

function App() {
  const baseURL = "https://pokeapi.co/api/v2/pokemon";
  const initialURL = baseURL + "?offset=0&limit=100";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      console.log("useEffect");
      setLoading(true);
      const res = await getAllPokemon(initialURL);
      const data = await loadPokemon(res.results);
      setPokemonData(data);
      setNextURL(res.next);
      setPrevURL(res.previous);
      setLoading(false);
    };
    fetchData();
  }, []);

  const loadPokemon = async (data) => {
    const promises = data.map((pokemon) => getPokemon(pokemon.url));
    const pokemonData = await Promise.all(promises);
    return pokemonData;
  };

  const handlePrevPage = async () => {
    if (!prevURL) {
      return;
    }
    setLoading(true);
    const data = await getAllPokemon(prevURL);
    const loadedData = await loadPokemon(data.results);
    setPokemonData(loadedData);
    setPrevURL(data.previous);
    setNextURL(data.next);
    setLoading(false);
  };

  const handleNextPage = async () => {
    // ページのoffsetの値が1010以上の場合は処理を行わない
    const maxPokemonNo = 1010;
    const offsetMatch = nextURL.match(/offset=(\d+)/);
    if (offsetMatch) {
      const offsetValue = parseInt(offsetMatch[1]);
      if (offsetValue >= maxPokemonNo) {
        setLoading(false);
        return;
      }
    }

    setLoading(true);
    const data = await getAllPokemon(nextURL);
    const loadedData = await loadPokemon(data.results);
    setPokemonData(loadedData);
    setPrevURL(data.previous);
    setNextURL(data.next);
    setLoading(false);
  };

  const handlePageJump = async (offset, limit) => {
    setLoading(true);
    const jumpURL = baseURL + `?offset=${offset}&limit=${limit}`;
    console.log(baseURL + `?offset=${offset}&limit=${limit}`);
    const res = await getAllPokemon(jumpURL);
    const data = await loadPokemon(res.results);
    setPokemonData(data);
    setNextURL(res.next);
    setPrevURL(res.previous);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="mainContainer">
              <Sidebar handlePageJump={handlePageJump} />
              <div className="pokemonCardContainer">
                {pokemonData.map((pokemon, i) => {
                  return <Card key={i} pokemon={pokemon} />;
                })}
              </div>
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
