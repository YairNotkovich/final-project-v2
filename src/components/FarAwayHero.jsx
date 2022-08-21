import * as React from 'react';
import {
  Stack,
  Card,
  Grid,
  CardActions,
  Box,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import RangeSlider from './slider input/rangeSlider';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import { selectAirports } from '../app/context/locations/airports/airportsSlice'
import { fetchRangedAirportsAsync, selectRangedAirports, initRangedAirports } from '../app/context/locations/airports/airportsSlice'
import { selectChartData, selectSuggested, initSuggested, selectCountries } from '../app/context/locations/countries/countriesSlice'
import CountryCard from './coutry-card/CountryCard';


const FarAwayHero = () => {

  const dispatch = useDispatch()
  const airports = useSelector(selectAirports)
  const countries = useSelector(selectCountries)
  const suggestedCountries = useSelector(selectSuggested)
  const rangedAirports = useSelector(selectRangedAirports)
  const [result, setResult] = useState(false)
  const [range, setRange] = useState(0)
  const [resultAirports, setResultAirports] = useState([])



  React.useEffect(() => {

    const minRange = range - 50
    const MaxRange = range + 100
    const airports = rangedAirports.filter(
        airport => (parseInt(airport.range) <= MaxRange && parseInt(airport.range) >= minRange) && airport)
        setResultAirports(airports)

}, [range])


  const sliderHandel = (value) => {
    setRange(value)
  }



  const handleChange = (item) => {

    if (parseInt(item.length) === 0) {
      dispatch(initRangedAirports())
      dispatch(initSuggested())
    }
  }

  const handleOnSelect = (item) => {
    dispatch(fetchRangedAirportsAsync(item.id))
    setResult(true)
  }

  const handleClear = () => {
    dispatch(initRangedAirports())
    dispatch(initSuggested())
    setResult(false)

  }


  const handleResultFormat = (item) => {
    return <span> {item.iata_code} | {item.city} | {item.country_name}</span>
  }
  // const numberOfHits = suggestedCountries.country[range / 100].length
  return (
    <Grid sx={{ display: 'block', maxWidth: 900, justifyContent: 'space-around' }} >

      <Card style={{ width: 800, minHeight: 800, marginLeft: '5%', padding: '1%' }}
      >
        <CardContent>
          <Typography color='primary' fontWeight={600} fontSize={24} style={{ padding: '2%' }} >So You want to go...

          </Typography>
          <CardMedia
            style={{ height: 180, paddingTop: '15%' }}
            alt='freedom'
            image={require('../assets/freedom.jpeg')}
          > </CardMedia>
          <Typography color='primary' fontWeight={600} fontSize={24} style={{ padding: '2%' }} >
            Where from?
          </Typography>
          <ReactSearchAutocomplete
            items={airports}
            onClear={handleClear}
            onSelect={handleOnSelect}
            formatResult={handleResultFormat}
            onSearch={handleChange}
            autoFocus
            fuseOptions={{ keys: ["iata_code", "name", "city", "country_name"] }}
            resultStringKeyName="display_name"
            placeholder='Enter Departure location'
            styling={
              {
                borderRadius: "4px",
                boxShadow: "rgba(52, 152, 219, 1) 0px 1px 6px 0px"
              }
            } />
          <Typography color='primary' fontWeight={600} fontSize={24} style={{ padding: '2%' }} >
            {resultcd Box..
            >0? (range===0?(`How far away? use the slider to set the range`):`${suggestedCountries.country[range / 100].length} Countries at ${range}km` ):'You need to set your departure location first'}
          </Typography>
          <RangeSlider  sliderHandel={sliderHandel} />
        </CardContent>

        <Stack sx={{ position: 'relative', marginTop: '20px' }} spacing={2}>
          {(suggestedCountries.country.some(x => x.length) && range > 0) &&
            (
              suggestedCountries.country[range / 100].map(country_id =>

                <CountryCard key={`${country_id}card`} country_id={country_id} resultAirports = {resultAirports}/>
              ))

          }
        </Stack>
      </Card>

    </Grid>
  );
}
export default FarAwayHero
