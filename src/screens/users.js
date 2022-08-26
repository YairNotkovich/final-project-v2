import * as React from 'react';
import CollapsibleTable from '../components/tabel/collapsible-table';
import { fetchUsersAsync } from '../context/admin/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../context/user/userSlice'
import { selectAdmin } from '../context/admin/adminSlice';
import { AccountProfile } from '../components/account/account-profile';
import {Box,TextField} from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';



const headers = [
  'id', 'username', 'email', 'first_name', 'last_name', 'last_login'
]

const tempChild = (
  <AccountProfile />
)


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
          <Item><AddOutlinedIcon/></Item>
        </Grid>
      </Grid>
    </Box>
  )
}

const Users = () => {


  const dispatch = useDispatch()
  const rowsData = useSelector(selectAdmin).userList
  const { role } = useSelector(selectUser)

  const newRow = (data, children) => {
    return { data: data, children: children }
  }

  let rows = []

  const refresh = React.useRef(false)

  React.useEffect(() => {
    if (refresh.current === true && role === 1) {
      dispatch(fetchUsersAsync())
    }
    refresh.current = true
  }, [role])

  if(rowsData !==[])
  {rows = rowsData.map(row => newRow(row, <AccountProfile />))}

  const pageControl = () => {

  }


  return (
    <>
      <Head
        name='Users'
      ></Head>
      {role === 1 ?
        <CollapsibleTable
          columns={headers}
          rows={rows} />
        :
        <Box>
          <h2>404</h2>
          <h3>Oops, nothing here...</h3>
          <p>Please Check the URL</p>
          <p>HAHA... Stop it.</p>
        </Box>
      }
    </>
  )
}

export default Users