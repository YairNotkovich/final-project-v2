import { useState } from 'react';
import { selectUser, updateUserAsync } from '../../context/user/userSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';


import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

export const AccountProfileDetails = (props) => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    ...user
  });
  const [address_values, setAddress] = useState({
    ...user.Address
  });

  const handleChange = (event) => {

    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleAddressChange = (event) => {
    setAddress({
      ...address_values,
      [event.target.name]: event.target.value
    })
  }

  const handleSave = () => {

    const updated = {
      ...values,
      Address: { ...address_values }
    }
    dispatch(updateUserAsync(updated))
  }


  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="You can edit your  details here"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="first_name"
                onChange={handleChange}
                // required
                value={values.first_name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="last_name"
                onChange={handleChange}
                // required
                value={values.last_name}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="Phone_No"
                onChange={handleChange}
                type="number"
                value={values.Phone_No}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country / State"
                name="state"
                onChange={handleAddressChange}
                // required
                value={values.Address && address_values.state}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="City"
                name="city"
                onChange={handleAddressChange}
                // required
                value={values.Address && address_values.city}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Street"
                name="street"
                onChange={handleAddressChange}
                // required
                value={values.Address && address_values.street}
                variant="outlined"
              >

              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Postcode"
                name="postcode"
                onChange={handleAddressChange}
                // required
                value={values.Address && address_values.postcode}
                variant="outlined"
              >

              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </Box>
      </Card>
    </form>
  );
};
