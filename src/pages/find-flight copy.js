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
    <Paper sx={{ backgroundColor: "fff", padding: 4, borderRadius: '0' }} >

      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
      >

        <Divider />
        <Box

          maxWidth={'1600px'}
          width={'100%'}
          paddingY={10}
          sx={{ padding: { md: 10, xs: 3 } }}
          backgroundColor
        >
          <ToggleTrip />

          <Grid container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center">
            <Grid item xs={3}>

              <Box
                borderRadius='5px'
                backgroundColor='background.paper'
                alignItems="center"
              >
                <AirportSearch
                  showIcon={false}
                  placeholder='From'
                  styling={
                    {
                      borderRadius: '5px',
                      height: '100px',
                    }
                  }
                />
              </Box>

            </Grid>
            <Grid item xs={2.75}>
              <Divider />
              <Box
                borderRadius='5px'
                backgroundColor='background.paper'
                alignItems="center">

                <AirportSearch

                  showIcon={false}
                  placeholder='To'
                  styling={
                    {
                      borderRadius: '5px',
                      height: '100px',
                    }
                  }
                />
              </Box>

            </Grid>
            <Grid item xs={1.5}>
              <Paper>
                <Box height={100}>

                </Box>
              </Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper>
                <Box height={100}>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper>
                <Box height={100}>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper>
                <Box height={100}>
                </Box>
              </Paper>
            </Grid>

          </Grid>

        </Box>
        <SearchFlight></SearchFlight>
      </Box>
    </Paper>
  )
}

export default FindFlight