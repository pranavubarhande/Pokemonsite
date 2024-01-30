// usePokemonList.js
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPokemonList = async (currentPage) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${currentPage * 20}`);
  return response.data.results;
};

const usePokemonList = (currentPage) => {
  return useQuery(['pokemonList', currentPage], () => fetchPokemonList(currentPage));
};

export default usePokemonList;
