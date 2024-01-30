// usePokemonDetails.js
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPokemonDetails = async (name) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
};

const usePokemonDetails = (name) => {
  return useQuery(['pokemonDetails', name], () => fetchPokemonDetails(name), { enabled: Boolean(name) });
};

export default usePokemonDetails;
