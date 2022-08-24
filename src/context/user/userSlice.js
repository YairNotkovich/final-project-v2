import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { BASE_URL } from '../../utils/api/urls';

const initialState = {
    username: "",
    avatar: "",
    role: 0,
    phone: "",
    credit: "",
    balance: 0,
    favorites: [],
    bookings: [],
    address: { street: '', state: '', city: '', postcode: '' },

};

export const initiateUserAsync = createAsyncThunk(
    "user/sign out",

    async () => {
        await initUser();
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBaseUser: (state, action) => {
            state.username = action.payload.username
            state.role = action.payload.role
            state.avatar = BASE_URL +'/images/'+ action.payload.avatar
        },
        initUser: (state) => {
            state = initialState
            
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(initiateUserAsync.fulfilled, (state) => {
                state.role = 0
            })
    }

})

export const getAvatarAndRole = () => (dispatch, getState) => {
    const state = getState()
    if (state.auth.authenticated) {
        const { role, avatar, username } = jwtDecode(sessionStorage.getItem("accessToken"));
        dispatch(setBaseUser({ role: role, avatar: avatar, username: username }));

    }

}

export const selectUser = (state) => state.user
export const { setBaseUser, initUser } = userSlice.actions;

export default userSlice.reducer