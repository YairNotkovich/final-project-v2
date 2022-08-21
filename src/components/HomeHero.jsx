import { useState,useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useSelector } from 'react-redux/es/exports'
import { selectAirports, selectAirportsRange } from '../../app/context/locations/airports/airportsSlice'
import { fetchRangedAirportsAsync, setSuggestedAirports } from '../../app/context/locations/airports/airportsSlice'
import { selectCountries, setSuggested,selectSuggested } from '../../app/context/locations/countries/countriesSlice'
import { useDispatch } from 'react-redux/es/exports'
import SliderInput from '../range-input/SliderInput'

const HomeHero = () => {
  const dispatch = useDispatch()
  // const [result, setResult] = useState('Enter Departure location')
  const airports = useSelector(selectAirports)
  const rangedAirports = useSelector(selectAirportsRange)
  const countriesAll = useSelector(selectCountries)
  const suggestedCountries = useSelector(selectSuggested)

  const [sliderValue, setSliderValue] = useState(0)
  const [origin, setOrigin] = useState(``)
  const [countriesId, setCountriesId] = useState(new Set())

  useEffect(() => {
    const suggested = countriesAll.filter(country=>countriesId.has(country.id)&&country)
    dispatch(setSuggested(suggested))
    // console.log('firing;',suggested)
  }, [sliderValue])
  

  const handelClick = () => {
    setCountriesId(new Set())
    // dispatch(suggestAirportsInRange(sliderValue,rangedAirports))
    let minRange = parseInt(sliderValue) - 50
    let maxRange = parseInt(sliderValue) + 50
    const suggestedAirports = rangedAirports.filter(airport => (parseInt(airport.range) < maxRange && parseInt(airport.range) > minRange) && (airport, setCountriesId(countriesId.add(airport.country_id))))
    dispatch(setSuggestedAirports(suggestedAirports))
    console.log(minRange, maxRange, countriesId)
  }

  const handelChange = (event) => {
    setSliderValue(event.target.value)
  }

  const handleOnSelect = (item) => {
    dispatch(fetchRangedAirportsAsync(item.id))
    setOrigin(handleResultFormat(item))
  }
  const handleOnFocus = () => {
    // console.log('Focused')
  }
  const handleResultFormat = (item) => {
    return <span> {item.iata_code} | {item.city} | {item.country_name}</span>
  }
  return (
    <div className='container gy-5'>
      <div className="container col-xl-10  px-4 py-5 border">
        <div className='row pb-5'>
          <p className='display-6'>Where are you?</p>
          <div className="row align-items-center">
            <div className="col-lg-5 py-2">
              <ReactSearchAutocomplete
                items={airports}
                // onSearch={handleOnSearch}
                // onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                formatResult={handleResultFormat}
                autoFocus
                fuseOptions={{ keys: ["iata_code", "name", "city", "country_name"] }}
                resultStringKeyName="iata_code"
                placeholder='Enter Departure location'
                styling={
                  {
                    borderRadius: "4px",
                    boxShadow: "rgba(52, 152, 219, 1) 0px 1px 6px 0px"
                  }
                }
              />
            </div>
            <div className="col">{origin}</div>
          </div>
        </div>
        <div className='row pb-5'>
          <p className='display-6'>How far do you want to go?</p>
        </div>
        <SliderInput onChange={handelChange}
          onClick={handelClick}
          max='20500' />
        <div className="row align-items-center g-lg-5 py-5">
        </div>
        </div>
        {suggestedCountries.map(country=> <div key={country.id} className="row align-items-center border py-1 flex">
          <div className="col"><p className='h1'>{country.Name}</p></div>
          <img src={country.Flag} className='col-2'/>
          </div>)}

    </div>
  )
}

export default HomeHero