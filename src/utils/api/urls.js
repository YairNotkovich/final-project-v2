
export const BASE_URL = "http://127.0.0.1:8000/"

export const LOCATION_URL = {
    GET_AIRPORTS: "general/fetch_airports/",
    GET_COUNTRIES: "general/fetch_countries/"
}

export const AUTH_URL = {
    LOGIN:"auth/authenticate/",
    REFRESH:'auth/authenticate/refresh/',
    USER_PERMS:"auth/fetch_user_perms/"
}


export const ADMIN_URL = {
    LOGIN:"auth/authenticate/",
 //   USER_PERMS:"auth/fetch_user_perms/"
}

export const USER_URL = {
    GET_PROFILE:"user/userprofile/<id>",
    CREATE_PROFILE:"user/create_profile/",
}

export const CUSTOMER_URL = {
    BASE:BASE_URL,
}


export const AIRLINE_URL = {
    BASE:BASE_URL,
}