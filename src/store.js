import { configureStore } from '@reduxjs/toolkit';
import authSlice from './context/auth/authSlice'
import airportsSlice from './context/locations/airports/airportsSlice'
import countriesSlice from './context/locations/countries/countriesSlice'
import userSlice from './context/user/userSlice'
import adminSlice from './context/admin/adminSlice';
import airlinesSlice from './context/airlines/airlinesSlice';

export const store = configureStore({
  reducer: {
    auth:authSlice,
    airports: airportsSlice,
    countries: countriesSlice,
    user: userSlice,
    admin:adminSlice,
    airlines: airlinesSlice,
  },
});

