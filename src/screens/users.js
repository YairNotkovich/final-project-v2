import * as React from 'react';
import CollapsibleTable from '../components/tabel/collapsible-table';
import { fetchUsersAsync } from '../context/admin/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../context/auth/authSlice'
import { selectUser } from '../context/user/userSlice'
import { selectAdmin } from '../context/admin/adminSlice';
import { AccountProfile } from '../components/account/account-profile';
import { useNavigate } from 'react-router-dom';
const headers = [
  'id', 'username', 'email', 'first_name', 'last_name', 'last_login'
]

const tempChild = (
  <AccountProfile />
)
const Users = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const rowsData = useSelector(selectAdmin).userList
  const { role } = useSelector(selectUser)
  const newRow = (data, children) => {
    return { data: data, children: children }
  }

  const refresh = React.useRef(true)
  React.useEffect(() => {
    if (refresh.current === true && role === 1) {
      dispatch(fetchUsersAsync())
    }
    refresh.current = false
  }, [])
  const rows = rowsData.map(row => newRow(row, <AccountProfile />))

  return (
    <>
      {role === 1 ?
        <CollapsibleTable columns={headers} rows={rows} />
        :
        <div className="container">
          <h2>404</h2>
          <h3>Oops, nothing here...</h3>
          <p>Please Check the URL</p>
          <p>HAHA... Stop it.</p>
        </div>
      }
    </>
  )
}

export default Users