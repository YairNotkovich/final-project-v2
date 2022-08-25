import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signIn, register } from './authAPI';


const initialState = {
    email: "",
    password: "",
    username: "",
    accessToken: "",
    PopupState: false,
    authenticated: false,
    registered: false,
};

export const LoginAsync = createAsyncThunk(
    "user/signIn",
    async (arg, { getState }) => {
        const response = await signIn({

            email: getState().auth.email,
            password: getState().auth.password,
        });

        return response.data.access;
    }
);


export const registerAsync = createAsyncThunk(
    "user/register",

    async (arg, { getState }) => {

        const response = await register({
            email: getState().auth.email,
            username: getState().auth.username,
            password: getState().auth.password,
        });

        return response.data;
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        togglePopUp: (state) => {
            state.PopupState = !state.PopupState
        },
        hidePopUp: (state) => {
            state.PopupState = false
        },
        showPopUp: (state) => {
            state.PopupState = true
        },
        logOut: (state) => {
            sessionStorage.removeItem("accessToken")
            state.authenticated = false;
            state = { ...initialState }

        },
        setCredentials: (state, action) => {
            
            const{email,userName,password} = action.payload;
            state.email = email;
            state.password = password;
            state.username = userName;
            
        },

        setAuth: (state, action) => {
            // if (action.payload) {
            state.accessToken = action.payload;
            state.authenticated = true
            // console.log('setAuth', state.authenticated)
            // }
        },
        


    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginAsync.rejected, (state, action) => {
                // console.log(action)
            })
            .addCase(LoginAsync.fulfilled, (state, action) => {
                sessionStorage.setItem("accessToken", JSON.stringify(action.payload));
                state.PopupState = false
                state.authenticated = true
                setAuth(action.payload)
                // fetchUserPermsAsync(action.payload.access)
            })
            .addCase(registerAsync.fulfilled, (state) => {
                console.log('fulldfas')
                state.registered = true
                // fetchUserPermsAsync(action.payload.access)
            })

    }
})
export const checkUser = () => (dispatch, getState) => {
    let tempTok = null
    // console.log('check user')

    try {
        tempTok = getState().auth.accessToken
        if (tempTok) {
            // console.log('was signed in')
            sessionStorage.setItem("accessToken", tempTok)
            // console.log('retrieved token')
        }
        else {
            try {
                tempTok = sessionStorage.getItem("accessToken")
                if (tempTok) {
                    dispatch(setAuth(tempTok))
                    // dispatch(fetchUserPermsAsync(tempTok))
                    // console.log('was not logged in')
                }
                else {
                }
                // console.log('no token in storage')

            }
            catch (err) {
                console.log(err)
            }
        }
    }
    catch (err) {
        console.log(err)
    }
}

// export const user = (state)=> state.user.user;
export const selectAuth = (state) => state.auth
export const selectPopUpstate = (state) => state.auth.PopupState
export const { logOut, setAuth, togglePopUp, hidePopUp, showPopUp, setCredentials } = authSlice.actions;

export default authSlice.reducer