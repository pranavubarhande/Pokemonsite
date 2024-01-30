// usePokemonSearch.js
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPokemonNames = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000');
  return response.data.results;
};

const usePokemonSearch = (searchTerm) => {
  const { data: pokemonNames = [], isLoading } = useQuery('pokemonNames', fetchPokemonNames);

  const filteredSuggestions = pokemonNames.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { suggestions: filteredSuggestions.slice(0, 10), isLoading };
};

export default usePokemonSearch;
