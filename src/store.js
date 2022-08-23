import { configureStore } from '@reduxjs/toolkit';
import authSlice from './context/auth/authSlice'
import airportsSlice from './context/locations/airports/airportsSlice'
import countriesSlice from './context/locations/countries/countriesSlice'


export const store = configureStore({
  reducer: {
    auth:authSlice,
    airports: airportsSlice,
    countries: countriesSlice,
  },
});

