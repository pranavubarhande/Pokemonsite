import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const DetailsPage = () => {
  const location = useLocation()
  console.log(location.state)
  return (
    <div
      style={{
        display: 'flex',
        marginLeft: '30%',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        border: '1px solid black',
        padding: 30,
        marginTop: 30,
        borderRadius: 20,
        maxWidth: '30%'
      }}
    >
      <h1>Pokemon Details</h1>
      <img
        src={location.state.pokemon.sprites.front_default}
        alt={location.state.pokemon.name}
      />
      <h2>Name: {location.state.pokemon.name}</h2>

      <h2>Pokemon Abilities</h2>
      {location.state.pokemon.abilities.map((item, index) => {
        return <p key={index}>{item.ability.name}</p>
      })}
    </div>
  )
}

export default DetailsPage
