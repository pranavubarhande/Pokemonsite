import React, { useState } from 'react';
import Loader from './Loader';
import usePokemonList from '../hooks/usePokemonList';
import usePokemonDetails from '../hooks/usePokemonDetails';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PokemonList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const { data: pokemonList, isLoading } = usePokemonList(currentPage);
  const { isLoading: isDetailsLoading } = usePokemonDetails();
  const [round, setRound] = useState(false)
  const handleClick = (name) => {
    setRound(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        setRound(false);
        navigate(`/details`, { state: { pokemon: response.data } })
      })
      .catch(err => {
        setRound(false);
        navigate('/error');
      })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 200 }}>
      {(isLoading || round) && <Loader />}
      <h1>All Pokemons</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {pokemonList &&
          pokemonList.map((pokemon) => (
            <div
              onClick={() => handleClick(pokemon.name)}
              key={pokemon.name}
              style={{
                minWidth: '600px',
                border: '1px solid black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 20,
                marginBottom: 30,
                marginLeft:10,
                marginRight:10
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                alt={pokemon.name}
                style={{ width: '50%' }}
              />
              <p style={{ fontSize: 24, fontWeight: 'bold' }}>{pokemon.name}</p>
            </div>
          ))}
      </div>
      <div>
        <button
          style={{ borderRadius: 10, fontSize: 24, padding: 10, margin: 10 }}
          disabled={currentPage === 0 || isLoading}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Back
        </button>
        <button
          style={{ borderRadius: 10, fontSize: 24, padding: 10, margin: 10 }}
          disabled={isLoading}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
