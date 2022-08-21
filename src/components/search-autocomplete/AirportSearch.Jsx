import React from 'react'
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const handleOnSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
}

const handleOnHover = (result) => {
  // the item hovered
  console.log(result)
}

const handleOnSelect = (item) => {
  // the item selected
  console.log(item)
}

const handleOnFocus = () => {
  console.log('Focused')
}

const formatResult = (item) => {
  return (
    <>
      <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
      <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
    </>
  )
}

const AirportSearch = (items) => {
  return (
    <>
      <ReactSearchAutocomplete
    items={items}
    onSearch={handleOnSearch}
    onHover={handleOnHover}
    onSelect={handleOnSelect}
    onFocus={handleOnFocus}
    autoFocus
    formatResult={formatResult}
  />
    </>
  )
}

export default AirportSearch