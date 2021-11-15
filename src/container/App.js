import React, { useEffect, useState } from "react";
import { usePosition } from 'use-position';
import { connect } from "react-redux";
import { reverseGeocode, setSearchField, fetchWeather } from "../actions";
import './App.css';
import Nav from "../components/Nav/Nav";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import cities from "./citylist.json";
import { api } from "../api";
import ReactLoading from 'react-loading';

const mapStateToProps = (state) => {
  return { 
    searchField: state.searchCities.searchField,
    RGCity: state.reverseGeocode.RGCity,
    isPending_rg: state.reverseGeocode.isPending_rg,
    error_rg: state.reverseGeocode.error_rg,
    currentWeather: state.fetchWeather.currentWeather,
    dailyWeather: state.fetchWeather.dailyWeather,
    hourlyWeather: state.fetchWeather.hourlyWeather,
    isPending_wt: state.fetchWeather.isPending_wt,
    error_wt: state.fetchWeather.error_wt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => dispatch(setSearchField(event.target.value)),
    reverseGeocode: (lat, lon, api) => dispatch(reverseGeocode(lat, lon, api)),
    fetchWeather: (args) => dispatch(fetchWeather(args))
  }
} 

const App = (props) => {
  
  const { searchField, handleChange, reverseGeocode, RGCity, fetchWeather, currentWeather, dailyWeather, hourlyWeather, isPending_wt } = props;

  const { latitude, longitude, error } = usePosition();
  const [ fetchedPosition, setFetchedPosition ] = useState(false);
  const [ position, setPosition ] = useState({lat: "", lon: ""});
  const [ units, setUnits ] = useState("standard");

  const handleClick = (e) => {
    const lat = e.target.dataset.lat;
    const lon = e.target.dataset.lon;
    setPosition({lat, lon})
    handleChange({target: {value: ""}})
  }

  const unitsChange = (e) => {
    const units = e.target.value.toLowerCase();
    setUnits(units)
  }
  
  if(RGCity){
    document.title = RGCity + " - " + new Date().toLocaleString("en-US", {timeZone: currentWeather.timeZone, day: "numeric", month: "2-digit", year: "2-digit", hour: "numeric", minute: "numeric", hourCycle: "h12"})
  }

  useEffect(() => {
    if(latitude && longitude && !fetchedPosition) {
        setPosition({ lat:latitude,  lon:longitude })
        setFetchedPosition(true)
    }

    if(position.lat && position.lon){
      fetchWeather({lat: position.lat, lon: position.lon, units, api})
      reverseGeocode(position.lat, position.lon, api)
    }
    if(error === "User denied geolocation prompt") {
      alert("Please allow location access to use this app.")
    }

    console.log(error);

  },[latitude, longitude, position.lat, position.lon, units, error])

  const formatCitiesData = cities.map(city => {
    return {
      cityName: `${city.name}, ${city.country}`,
      lat: city.coord.lat,
      lon: city.coord.lon,
      id: city.id
    }
  })
  
  const filteredCity = formatCitiesData.filter(city => {
    return city.cityName.toLowerCase().includes(searchField.toLowerCase());
  })
  const limitedFilteredCity = filteredCity.filter((item, index) => {
    return index < 6;
  })

  if(currentWeather.weather !== undefined){
    return (
      <div className={`App g${currentWeather.time < 10 ? currentWeather.time[1] : currentWeather.time}`}>
        <Nav 
        handleChange={handleChange} 
        searchField={searchField} 
        limitedFilteredCity={limitedFilteredCity} 
        handleClick={handleClick}
        unitsChange={unitsChange} />
        <WeatherCard 
        isPending_wt={isPending_wt}
        currentWeather={currentWeather}
        dailyWeather={dailyWeather}
        hourlyWeather={hourlyWeather}
        RGCity={RGCity}
        units={units}
        />
        <p className="copyright">Source code: <a href="https://github.com/heinminhtun1999/weather-app">https://github.com/heinminhtun1999/weather-app</a></p>
      </div>
    )  
  } else {
    return (
      <div className="loading-screen">
        <ReactLoading type={"bars"} color={"white"} height={'20%'} width={'20%'}/>
      </div>
    )
  }

    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
