import React from "react";
import "./Wind.css";
import wind from "../icons/wind.png";


const Wind = (props) => {

    const { isPending_wt, currentWeather, units } = props;

    return (
        <div className={`wind subcard card ${isPending_wt && "loading"}`}>
            {!isPending_wt &&
                <div className="wind-content">
                    <div className="wind-title">
                        <img src={wind} alt="wind-icon" className="wind-icon" />
                        <p>WIND</p>
                    </div>
                    <p>Wind: {currentWeather.wind.wind_speed} km/h</p>
                    <p>Direction: {currentWeather.wind.wind_deg}°</p>
                    <p>Wind Gusts: {currentWeather.wind.wind_gust === undefined ? 0 : currentWeather.wind.wind_gust} km/h</p>
                </div>
            }
        </div>
    )
}

export default Wind;