import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  // const pokemonNames = ['bulbasaur', 'ivysaur', 'venusaur', /*... and so on */];
  const [pokemonNames,setPokemonNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchTerm(inputValue);

    // Filter Pokemon names based on the typed input
    const filteredSuggestions = pokemonNames.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(inputValue)
    );

    setSuggestions(filteredSuggestions);
  };
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]); // Clear suggestions after selection
  };

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10000`).then(response => {
        setPokemonNames(response.data.results);
        // setLoading(false);
      }).catch(err => {
        // setLoading(false);
      })
  }, [])
  

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
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
    <div style={{marginTop: 20, display:'flex' ,}}>
      {loading && 
      <Loader />
      }
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <input
          style={{ fontSize: 24, borderRadius: 10, padding: 10, marginRight: 20 }}
          type='text'
          
          value={searchTerm}
          placeholder='Search for the pokemon'
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && searchTerm != '' && (
          <ul style={{ listStyleType: 'none', padding: 0 , backgroundColor:'#ccc', width:'90%', position:'absolute',  borderRadius:20, marginTop:60, padding:10, maxWidth:300}}>
            {suggestions.slice(0, 10).map((suggestion) => (
              <li
               
                key={suggestion}
                style={{
                  cursor: 'pointer',
                  padding: 5,
                  transition: 'background-color 0.3s ease',
                }}   
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#eee')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}             
                onClick={() => handleSuggestionClick(suggestion.name)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        style={{
          fontSize: 24,
          padding: 10,
          borderRadius: 10,
          backgroundColor: 'black',
          color: 'white',
          height:50
        }}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
