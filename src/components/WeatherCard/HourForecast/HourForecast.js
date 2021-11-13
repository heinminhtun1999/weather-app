import React from "react";
import "./HourForecast.css";
import ScrollContainer from 'react-indiana-drag-scroll';

const HourForecast = (props) => {

    const { isPending_wt, hourlyWeather, units, currentWeather } = props;

    const excludeFirst = hourlyWeather.filter((a, i) => {
        return i > 0;
    })

    return (
        <div className={`hour-forecast card ${isPending_wt && "loading"}`}>
            {!isPending_wt &&
                    <ScrollContainer className="hour-forecast-content" key="0">
                    <div className="hour-forecast-item noselect">
                        <p className="time">Now</p>
                        <img src={`https://openweathermap.org/img/wn/${hourlyWeather[0].weather.icon}@4x.png`} alt="hour-weather-icon" className="hour-weather-icon" />
                        <p className="hour-forecast-temp">{hourlyWeather[0].temp}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</p>
                    </div>
                    {excludeFirst.map((data, index) => {
                        return (
                            <div className="hour-forecast-item noselect" key={index + 1}>
                                <p className="time">{data.time}</p>
                                <img src={`https://openweathermap.org/img/wn/${data.weather.icon}@4x.png`} alt="hour-weather-icon" className="hour-weather-icon" />
                                <p className="hour-forecast-temp">{data.temp}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</p>
                            </div>
                        )
                    })}
                    </ScrollContainer>
            }
        </div>
    )
}

export default HourForecast;