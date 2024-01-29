import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate(`/search?q=${searchTerm}`)
  }

  return (
    <div style={{ alignSelf: 'center', textAlign: 'center', marginTop: 20 }}>
      <input
        style={{ fontSize: 24, borderRadius: 10, padding: 10, marginRight: 20 }}
        type='text'
        value={searchTerm}
        placeholder='Search for the pokemon'
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button
        style={{
          fontSize: 24,
          padding: 10,
          borderRadius: 10,
          backgroundColor: 'black',
          color: 'white'
        }}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
