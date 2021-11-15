import React from "react";
import "./Wind.css";
import wind from "../icons/wind.png";

const Wind = (props) => {

    const { isPending_wt, currentWeather } = props;

    return (
        <div className={`wind subcard card ${isPending_wt && "loading"}`}>
            {!isPending_wt &&
                <div className="wind-content subcard-content">
                    <div className="wind-title subcard-title">
                        <img src={wind} alt="wind-icon" className="wind-icon" />
                        <p>WIND</p>
                    </div>
                    <div className="wind-values">
                        <p>Speed: {currentWeather.wind.wind_speed} km/h</p>
                        <p>Direction: {currentWeather.wind.wind_deg}°</p>
                        <p>Gusts: {currentWeather.wind.wind_gust === undefined ? 0 : currentWeather.wind.wind_gust} km/h</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Wind;