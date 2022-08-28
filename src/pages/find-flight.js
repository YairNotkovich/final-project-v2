import * as React from 'react';
import {
  Stack,
  Card,
  Grid,
  TextField,
  CardMedia,
  Typography,
  Paper,
  Box,
  Divider
} from '@mui/material';

import ToggleTrip from '../components/toggle button/toggle-trip';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import AirportSearch from '../components/search-autocomplete/AirportSearch.js';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import SearchFlight from '../screens/search-flight';


const FindFlight = () => {



  return (

    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
    >

      <Divider />

      <SearchFlight />
    </Box>
  )
}

export default FindFlight