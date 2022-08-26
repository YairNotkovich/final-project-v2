
export const BASE_URL = "http://127.0.0.1:8000"

export const LOCATION_URL = {
    GET_AIRPORTS: "/general/fetch_airports/",
    GET_COUNTRIES: "/general/fetch_countries/"
}

export const AUTH_URL = {
    LOGIN:"/auth/authenticate/",
    REGISTER:"/auth/signup/",
    REFRESH:'/auth/authenticate/refresh/',
}


export const ADMIN_URL = {
    ALL_USERS:"/system/user-list/",
}

export const USER_URL = {
    GET_PROFILE:"/user/userprofile/",
    CREATE_PROFILE:"/user/create_profile/",
    UPLOAD_IMAGE: "/user/upload_image/"
}

export const CUSTOMER_URL = {
    BASE:BASE_URL,
}


export const AIRLINE_URL = {
    BASE:BASE_URL,
}