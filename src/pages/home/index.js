import React from 'react';
import SearchBar from '../../components/SearchBar';
import RandomPokemonCard from '../../components/RandomPokemonCard';

const HomePage = () => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <SearchBar />
      <RandomPokemonCard />
    </div>
  );
};

export default HomePage;
