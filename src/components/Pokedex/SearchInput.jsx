import React from 'react'

const SearchInput = ({setPokeSearch}) => {

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType ('All')
    // e.target.searchText.value = ""
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id='searchText' type="text" />
      <button>Search</button>
    </form>
  )
}

export default SearchInput