import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { BASE_URL } from '../../utils/api/urls';
import { uploadPicture, getUserProfile } from './userAPI'

const initialState = {
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    last_login: "",
    date_joined: "",
    user_id: 0,
    avatar: null,
    role: 0,
    Phone_No: "",
    credit: "",
    balance: 0,
    favorites: [],
    bookings: [],
    address: { street: '', state: '', city: '', postcode: '' },
    airline_code:"",
    airline_name:"",
};

export const initiateUserAsync = createAsyncThunk(
    "user/sign out",

    async () => {
        await initUser();
    }
);


export const uploadPictureAsync = createAsyncThunk(

    "user/uploadImage",
    async (file) => {
        const form = new FormData();
        form.append('Photo', file, file.name)
        const response = await uploadPicture(form)
        console.log(response)
        return response.data;
    }
)


export const getUserAsync = createAsyncThunk(

    "user/get_profile",
    async () => {
        const response = await getUserProfile()

        return response.data;
    }
)


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBaseUser: (state, action) => {
            state.username = action.payload.username
            state.role = action.payload.role
            state.avatar = BASE_URL + action.payload.avatar
            state.profile_id = action.payload.id
            state.user_id = action.payload.user_id
            console.log('base user', action.payload)

        },
        initUser: (state) => {
            
            const keys = Object.keys(state);
            keys.forEach((key) => {
                state[key] =  initialState[key] 
            });
        },
        setAddress: (state, action) => {
            state.address = { ...action.payload.address }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(initiateUserAsync.fulfilled, (state) => {
                state.role = 0
            })
            .addCase(uploadPictureAsync.fulfilled, (state, action) => {
                state.avatar = action.payload.Photo
            })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                const state_keys = Object.keys(state);
                state_keys.forEach((key) => {
                    state[key] =  action.payload[key] 
                });
                // const address_keys = Object.keys(state.address);
                // address_keys.forEach((key) => {
                //     state[key] =  JSON.parse(action.payload.Address)[key] 
                // });
                state.role = action.payload.Role;
                state.avatar = BASE_URL + action.payload.Photo;
                state.user_id = action.payload.User;
                if (action.payload.Role === 3){
                    state.airline_code = action.payload.Code
                    state.airline_name = action.payload.Name
                }
            })
    }


})



export const selectUser = (state) => state.user
export const { setBaseUser, initUser } = userSlice.actions;

export default userSlice.reducer