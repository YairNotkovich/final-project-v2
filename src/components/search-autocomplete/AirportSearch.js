import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { selectAirports } from '../../context/locations/airports/airportsSlice'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const AirportSearch = (props) => {
  const airports = useSelector(selectAirports)
  const [result, setResult] = React.useState(false)

  const handleChange = (item) => {

    setResult(false)

  }

  const handleOnSelect = (item) => {
    setResult(true)
  }

  const handleClear = () => {

    setResult(false)
  }

  const handleResultFormat = (item) => {
    return <span>  {item.city} | {item.country_name}</span>
  }

  return (
    <>
      <ReactSearchAutocomplete
        items={airports}
        onClear={handleClear}
        onSelect={handleOnSelect}
        formatResult={handleResultFormat}
        onSearch={handleChange}
        autoFocus
        fuseOptions={{ keys: ["iata_code", "name", "city", "country_name"] }}
        resultStringKeyName="display_name"
        {...props}
      />
    </>
  )
}

export default AirportSearch