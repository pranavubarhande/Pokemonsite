// PokemonList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  

  useEffect( () => {
    setLoading(true);
      const response =  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${currentPage*20}`).then(response => {
        setPokemonList(response.data.results);
        setLoading(false);
      }).catch(err => {
        setLoading(false);
      })
      
  }, [currentPage]);
  const handleClick = (name) => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        setLoading(false);
        navigate(`/details`, { state: { pokemon: response.data } })
      })
      .catch(err => {
        setLoading(false);
        navigate('/error');
      })
  }

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', paddingBottom:200}}>
      {loading && <Loader />}
      <h1>All Pokemons</h1>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
        {pokemonList.map((pokemon) => (
          <div onClick={() => {handleClick(pokemon.name)}} key={pokemon.name} style={{minWidth:'600px', border:'1px solid black', display:'flex', flexDirection:'column', alignItems:'center', borderRadius:20, marginBottom:30}}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
              alt={pokemon.name}
              style={{ width: "50%"}}
            />
            <p style={{fontSize:24, fontWeight:'bold'}}>{pokemon.name}</p>
          </div>
        ))}
      </div>
      <div>
        <button style={{borderRadius:10, fontSize:24, padding:10, margin:10}} disabled={currentPage==0} onClick={() => {setCurrentPage(currentPage-1)}}>Back</button>
        <button style={{borderRadius:10, fontSize:24, padding:10, margin:10}} onClick={() => {setCurrentPage(currentPage+1)}}>Next</button>
      </div>
    </div>
  );
};

export default PokemonList;
