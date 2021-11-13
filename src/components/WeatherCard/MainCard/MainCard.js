import React from "react";
import "./MainCard.css";

const MainCard = (props) => {

    const { isPending_wt, currentWeather, dailyWeather, RGCity, units } = props;

    return (
        <div className={`main-card card ${isPending_wt && "loading"}`}>
                { !isPending_wt && 
                    <div className="main-card-contents">
                        <div className="main-card-left">
                            <h1 className="current-city-name">{RGCity}</h1>
                            <h2 className="current-main-temp">{currentWeather.temp}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</h2>
                            <p className="feels-like">Feels Like: {currentWeather.feels_like}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</p>
                            <span>L: {dailyWeather[0].temp.min}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</span>
                            <span>H: {dailyWeather[0].temp.max}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</span>
                        </div>
                        <div className="main-card-right">
                            <h1 className="weather-main">{currentWeather.weather.main}</h1>
                            <h3 className="weather-main-desc">{currentWeather.weather.desc}</h3>
                            <img className="main-current-weather-icon" src={`https://openweathermap.org/img/wn/${currentWeather.weather.icon}@4x.png`} alt="weather-icon"></img>
                            <p className="current-cloud">Cloud: {currentWeather.clouds}%</p>
                        </div>
                    </div> 
                }
        </div>
    )
}

export default MainCard;