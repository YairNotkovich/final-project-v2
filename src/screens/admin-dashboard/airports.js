import * as React from 'react';
import CollapsibleTable from '../../components/tabel/collapsible-table';
import { useDispatch, useSelector } from 'react-redux';
import { AccountProfile } from '../../components/account/account-profile';
import { Box, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { selectAirports } from '../../context/locations/airports/airportsSlice';








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

const Airports = () => {

  const columns = [
    { value: 'id', align: 'center', label: 'ID', },
    { value: 'iata_code', align: 'center', label: 'Code', },
    { value: 'name', align: 'center', label: 'Airport Name', },
    { value: 'city', align: 'center', label: 'City', },
    { value: 'country_name', align: 'center', label: 'Country Name', },
  ]

  
  const dispatch = useDispatch()
  // const rowsData = useSelector(selectAdmin).userList
  const rowsData = useSelector(selectAirports)

  const newRow = (data, children) => {
    return { data: data, children: children }
  }

  let rows = []


  if (rowsData !== []) { rows = rowsData.map(row => newRow(row, <AccountProfile />)) }

  const pageControl = () => {

  }


  return (
    <Grid sx={{ display: "flex", flexDirection: "column" }}>
      <Head
        name='Airports'
      ></Head>

      <CollapsibleTable
        columns={columns}
        rows={rows} />
    </Grid>
  )
}

export default Airports