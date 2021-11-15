import React from "react";
import "./MainCard.css";

const MainCard = (props) => {

    const { isPending_wt, currentWeather, dailyWeather, RGCity, units } = props;

    return (
        <div className={`main-card card ${isPending_wt && "loading"}`}>
            {!isPending_wt &&
                <div className="main-card-contents">
                        <h1 className="current-city">{RGCity}</h1>
                        <h1 className="current-main-temp">{currentWeather.temp}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</h1>
                        <p className="feels-like">Feels Like: {currentWeather.feels_like}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</p>
                    <div className="current-main-temp-parent">
                        <p className="current-weather-min-max ">{dailyWeather[0].temp.min}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</p>
                        <div className="current-temp-bar"></div>
                        <p className="current-weather-min-max ">{dailyWeather[0].temp.max}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</p>
                    </div>
                        <h2 className="weather-main-desc">{currentWeather.weather.desc}</h2>
                        <p className="current-cloud">Cloud: {currentWeather.clouds}%</p>
                </div>
            }
        </div>
    )
}

export default MainCard;