import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const fullDate = new Date().toUTCString()
const now = new Date()

const init_date = { day: now.getDate(), month: now.getMonth() + 1, year: now.getFullYear() }

export const date_obj = (date) => ({
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
})

export const date_objToString = (date_obj) => (
    `${date_obj.year}-${date_obj.month}-${date_obj.day}`
)


const initialState = {

    departureDate: init_date,
    returnDate: init_date,
    arrivalDate: init_date,

    departureAirport: {},
    destinationAirport: {},

    travelers: 0,

};



export const tripSlice = createSlice({
    name: 'trip',
    initialState,
    reducers: {
        setDepartureDate: (state, action) => {
            state.departureDate = action.payload;
        },
        setReturnDate: (state, action) => {
            state.returnDate = action.payload;
        },

        setArrivalDate: (state) => {
            // state.airportsList = initialState.airportsList;
        },

        setDepartureAirport: (state, action) => {
            // state.range = action.payload;
        },

        setDestinationAirport: (state, action) => {
            // state.suggestAirportsInRange = action.payload;
        },

        setTravelers: (state, action) => {
            state.travelers = action.payload;
        },
        initTrip: (state) => {
            state = {
                ...initialState
            }
        },


    },
    // extraReducers: (builder) => {
    //     builder

    //         .addCase(fetchAirportsAsync.rejected, (action) => {
    //             console.log(action)
    //         })

    // }
})

export const { setDepartureDate, setReturnDate, setArrivalDate, setDepartureAirport, setArrivalAirport, initTrip } = tripSlice.actions;
export const selectTrip = (state) => state.trip

export default tripSlice.reducer