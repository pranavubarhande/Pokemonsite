import React from 'react';
import SearchBar from '../../components/SearchBar';
import RandomPokemonCard from '../../components/RandomPokemonCard';
import pokemonLogo from "../../assets/poke-logo.png"
import PokemonList from '../../components/PokemonList';

const HomePage = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <img style={{alignSelf:'center', height:100}} src={pokemonLogo} alt="pokemon" />
      <SearchBar />
      <RandomPokemonCard />
      <PokemonList />
    </div>
  );
};

export default HomePage;
