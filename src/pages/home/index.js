import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import RandomPokemonCard from '../../components/RandomPokemonCard';
import pokemonLogo from "../../assets/poke-logo.png"
import PokemonList from '../../components/PokemonList';

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  return (
    <div style={{display:'flex', flexDirection:'column',width:`${windowWidth}px`, alignItems:'center'}}>
      <img style={{height:100, width:250}} src={pokemonLogo} alt="pokemon" />
      <SearchBar />
      <RandomPokemonCard />
      <PokemonList />
    </div>
  );
};

export default HomePage;
