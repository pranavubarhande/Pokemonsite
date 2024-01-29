import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SearchResultsPage = () => {
  const location = useLocation()
  const searchTerm = new URLSearchParams(location.search).get('q')
  console.log(searchTerm)
  const [searchedPokemon, setSearchedPokemon] = useState(null)

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .then(response => {
        setSearchedPokemon(response.data)
      })
      .catch(err => {
        alert('Invalid Name')
      })
  }, [])
  const navigate = useNavigate()

  const handleDetails = () => {
    navigate(`/details`, { state: { pokemon: searchedPokemon } })
  }

  return (
    <div
      onClick={handleDetails}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        border: '1px solid black',
        padding: 30,
        marginTop: 30,
        borderRadius: 20,
        maxWidth: '30%',
        marginLeft: '30%'
      }}
    >
      <h2 style={{ textAlign: 'center' }}>
        Search Results for "{searchTerm}" (Click for details)
      </h2>
      {searchedPokemon && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <img
            src={searchedPokemon.sprites.front_default}
            alt={searchedPokemon.name}
          />
          <h3>Name: {searchedPokemon.name}</h3>
        </div>
      )}
    </div>
  )
}

export default SearchResultsPage
