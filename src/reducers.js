import * as constants from "./constants";

const { CHANGE_SEARCH_FIELD,
        FETCH_WEATHER_PENDING,
        FETCH_WEATHER_SUCCESS,
        FETCH_WEATHER_FAILED,
        REVERSE_GEOCODE_PENDING,
        REVERSE_GEOCODE_SUCCESS,
        REVERSE_GEOCODE_FAILED  } = constants;

// SEARCH CITIES FROM SEARCH INPUT

const searchFieldInitialState = { 
    searchField: ""
}

export const searchCities = (state=searchFieldInitialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

// REVERSE GEOCODING 

const reverseGeocodeInitialState = {
    isPending_rg: false,
    RGCity: "",
    error_rg: ""
}

export const reverseGeocode = (state=reverseGeocodeInitialState, action={}) => {
    switch(action.type) {
        case REVERSE_GEOCODE_PENDING:
            return Object.assign({}, state, { isPending_rg: true });
        case REVERSE_GEOCODE_SUCCESS:
            return Object.assign({}, state, { RGCity: action.payload, isPending_rg: false });
        case REVERSE_GEOCODE_FAILED:
            return Object.assign({}, state, { error_rg: action.payload, isPending_rg: false });
        default:
            return state;
    }
}   

// FETCH WEATHER DATA

const weatherInitialState = {
    currentWeather: {},
    dailyWeather: [],
    hourlyWeather: [],
    // alerts: {},
    isPending_wt: false,
    error_wt: ""
}

export const fetchWeather = (state=weatherInitialState, action={}) => {
    switch(action.type){
        case FETCH_WEATHER_PENDING:
            return Object.assign({}, state, { isPending_wt: true })
        case FETCH_WEATHER_SUCCESS:
            return Object.assign({}, state, { 
                currentWeather: action.payload.currentWeather, 
                dailyWeather: action.payload.dailyWeather, 
                hourlyWeather: action.payload.hourlyWeather,
                // alerts: action.payload.alerts, 
                isPending_wt: false })
        case FETCH_WEATHER_FAILED:
            return Object.assign({}, state, { error_wt: action.payload, isPending_wt: false })
        default:
            return state;
    }
}