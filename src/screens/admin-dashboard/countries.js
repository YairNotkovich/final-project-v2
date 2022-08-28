import * as React from 'react';
import CollapsibleTable from '../../components/tabel/collapsible-table';
import { fetchUsersAsync } from '../../context/admin/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../context/user/userSlice'
import { selectAdmin } from '../../context/admin/adminSlice';
import { AccountProfile } from '../../components/account/account-profile';
import { Box, Container, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { selectCountries } from '../../context/locations/countries/countriesSlice'
import EditCountry from './edit_country';







const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.h3,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.main,
}));

const Head = (props) => {
  const { name, search, edit } = props



  return (
    <Box sx={{ flexGrow: 1, margin: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs="auto">
          <Item>{name}</Item>
        </Grid>
        <Grid item xs>
          <Item><TextField></TextField></Item>
        </Grid>
        <Grid item xs={2}>
          <Item><AddOutlinedIcon /></Item>
        </Grid>
      </Grid>
    </Box>
  )
}

const Countries = () => {

  const columns = [
    { value: 'id', align: 'center', label: '', },
    { value: 'Name', align: 'center', label: 'Country Name', },
    { value: 'Flag', align: 'center', label: 'Flag URL', },
  ]
  const dispatch = useDispatch()
  // const rowsData = useSelector(selectAdmin).userList
  const { role } = useSelector(selectUser)
  const rowsData = useSelector(selectCountries)

  const newRow = (data, child) => {
    return { data: data, children: child }
  }

  let rows = []


  if (rowsData !== []) { rows = rowsData.map(row => newRow(row, <EditCountry data={row} />)) }

  const pageControl = () => {

  }


  return (
    <Grid sx={{ display: "flex", flexDirection: "column" }}>
      <Head
        name='Countries'
      ></Head>
      {role === 1 ?
        <CollapsibleTable
          columns={columns}
          rows={rows} />
        :
        <Box>
          <h2>404</h2>
          <h3>Oops, nothing here...</h3>
          <p>Please Check the URL</p>
          <p>HAHA... Stop it.</p>
        </Box>
      }
    </Grid>
  )
}

export default Countries