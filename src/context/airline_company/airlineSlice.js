
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAirlines } from './airlineOpenAPI'

const initialState = {
    User_Id: 0,
    avatar: null,
    balance: 0,
    flights: [],
    Code: "",
    Name: "",
    Country: "",
    Is_Active: false,
};

export const fetchAirlinesAsync = createAsyncThunk(
    "airline/privet",

    async () => {
        const response = await getAirlines();
        return response.data
    }

);



export const airlineSlice = createSlice({
    name: 'airline',
    initialState,
    reducers: {

        // setAddress: (state, action) => {
        //     state.address = { ...action.payload.address }
        // }
    },
    extraReducers: (builder) => {
        builder

    .addCase(fetchAirlinesAsync.fulfilled, (state, action) => {

        const state_keys = Object.keys(state);
        state_keys.forEach((key) => {
            state[key] = action.payload[key]
        });
    })
    }


})



export const selectAirlines = (state) => state.airline
export const { } = airlineSlice.actions;

export default airlineSlice.reducer