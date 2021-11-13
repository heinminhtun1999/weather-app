import React from "react";
import "./Humidity.css";
import humidityIcon from "../icons/humidity.png";

const Humidity = (props) => {

    const { isPending_wt, currentWeather, units } = props;

    return (
        <div className={`humidity subcard card ${isPending_wt && "loading"}`}>
            {!isPending_wt &&
                <div className="humidity-content">
                    <div className="humidity-title">
                        <img src={humidityIcon} alt="humidity-icon" className="humidity-icon" />
                        <p>HUMIDITY</p>
                    </div>
                    <h1>{currentWeather.humidity}</h1>
                    <p className="dew-point">The dew point is {currentWeather.dew_point}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"} right now.</p>
                </div>
            }
        </div>
    )
}

export default Humidity;