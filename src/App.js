import { React, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './screens/NavBar';
import Test from './screens/Test'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { checkUser, selectAuth } from './context/auth/authSlice';
import { fetchAirportsAsync } from './context/locations/airports/airportsSlice'
import { fetchCountriesAsync } from './context/locations/countries/countriesSlice'
import FarAway from './screens/FarAway';





function App() {
  const dispatch = useDispatch()
  const runCheckUser = useRef(false)
  const runFetchData = useRef(true)

  const { accessToken } = useSelector(selectAuth)

  useEffect(() => {
    dispatch(checkUser())
    if (runCheckUser.current === true) {
      const fetchUser = async () => {
        dispatch(checkUser())
      }
      fetchUser()
    }
    return () => {
      runCheckUser.current = true
    }
    // eslint-disable-next-line
  }, [accessToken]);


  useEffect(() => {
    if (runFetchData.current === true) {
      const fetchData = async () => {
        dispatch(fetchAirportsAsync())
        dispatch(fetchCountriesAsync())
      }
      fetchData()
      return () => {
        runFetchData.current = false
      }
    }

    // eslint-disable-next-line
  }, []);


  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<FarAway />} />
        <Route path='/test' element={<Test />} />
      </Route>
    </Routes>

  );
}

export default App;
