import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RandomPokemonCard = () => {
  const setWithExpiry = (key, value, expirationInMinutes) => {
    const now = new Date()
    const item = {
      value: value,
      expiry: now.getTime() + expirationInMinutes * 60 * 1000
    }
    localStorage.setItem(key, JSON.stringify(item))
  }
  const getWithExpiry = key => {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
      return null
    }

    const item = JSON.parse(itemStr)
    const now = new Date()

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key)
      return null
    }

    return item.value
  }
  const [randomPokemon, setRandomPokemon] = useState(
    getWithExpiry('pokemon') || null
  )

  useEffect(() => {
    // localStorage.removeItem('pokemon')
    if (randomPokemon) {
      return
    }
    const number = Math.floor(Math.random() * 90) + 10
    axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`).then(response => {
      setRandomPokemon(response.data)
      setWithExpiry('pokemon', response.data, 1440)
    })
  }, [])
  const navigate = useNavigate()

  const handleDetails = () => {
    navigate(`/details`, { state: { pokemon: randomPokemon } })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center'
      }}
    >
      {randomPokemon && (
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
            borderRadius: 20
          }}
        >
          <h2 style={{ textAlign: 'center' }}>
            Random Pokemon of the Day(Click for details)
          </h2>
          <img
            src={randomPokemon.sprites.front_default}
            alt={randomPokemon.name}
          />
          <h3>Name: {randomPokemon.name}</h3>
        </div>
      )}
    </div>
  )
}

export default RandomPokemonCard
