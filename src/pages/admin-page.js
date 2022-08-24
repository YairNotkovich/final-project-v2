import * as React from 'react';
import AdminDashboard from '../components/admin-dashboard/dashboard'
import { showPopUp, selectAuth } from '../context/auth/authSlice';
import { selectUser } from '../context/user/userSlice';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
const Admin = () => {

const {role} = useSelector(selectUser)


const navigate = useNavigate()

React.useEffect(()=>{
  if(role !== 1){
    navigate('/')
  }
},[role])

  return (
    <Grid sx={{height:'100vh'}}>
    <AdminDashboard />
    </Grid>
  )
}

export default Admin