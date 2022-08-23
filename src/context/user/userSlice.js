import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signIn} from './authAPI';


const initialState = {
    email: "",
    password: "",
    accessToken: "",
    PopupState: false,
    authenticated: false,
};

export const LoginAsync = createAsyncThunk(
    "user/signIn",

    async (user) => {
        const response = await signIn({
            email: user.email,
            password: user.password,
        });
        return response.data.access;
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
            state.authenticated = false;
            state = initialState
            sessionStorage.removeItem("accessToken")
        },

        setAuth: (state, action) => {
            // if (action.payload) {
            state.accessToken = action.payload;
            state.authenticated = true
            // console.log('setAuth', state.authenticated)
            // }
        },
        setCredentials: (state, action) => {
            // if (action.payload) {
            state.email = action.payload.email
            state.password = action.payload.password
            // }
        }


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
                else{
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
export const { logOut, setAuth, togglePopUp, hidePopUp, showPopUp } = authSlice.actions;

export default authSlice.reducer