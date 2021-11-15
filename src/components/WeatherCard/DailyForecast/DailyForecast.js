import React from "react";
import "./DailyForecast.css";
import ScrollContainer from 'react-indiana-drag-scroll';

const DailyForecast = (props) => {

    const { isPending_wt, dailyWeather, units } = props;

    const excludeFirst = dailyWeather.filter((a, i) => {
        return i > 0;
    })

    return (
        <div className={`daily-forecast card ${isPending_wt && "loading"}`}>
            {!isPending_wt &&
                <ScrollContainer className="daily-forecast-content" key="0">
                    <div className="daily-forecast-item">
                        <div className="daily-weather-left">
                            <p className="day">Today</p>
                            <img src={`https://openweathermap.org/img/wn/${dailyWeather[0].weather.icon}@4x.png`} alt="daily-weather-icon" className="daily-weather-icon" />
                            <p className="daily-weather-temp">{dailyWeather[0].weather.main}</p>
                        </div>
                        <div className="daily-weather-right">
                            <p>{dailyWeather[0].temp.min}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</p>
                            <div className="daily-temp-bar"></div>
                            <p>{dailyWeather[0].temp.max}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</p>
                        </div>
                    </div>
                    {excludeFirst.map((data, index) => {
                        return (
                            <div className="daily-forecast-item" key={index + 1}>
                                <div className="daily-weather-left">
                                    <p className="day">{data.date}</p>
                                    <img src={`https://openweathermap.org/img/wn/${data.weather.icon}@4x.png`} alt="daily-weather-icon" className="daily-weather-icon" />
                                    <p className="daily-weather-temp">{data.weather.main}</p>
                                </div>
                                <div className="daily-weather-right">
                                    <p>{data.temp.min}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</p>
                                    <div className="daily-temp-bar"></div>
                                    <p>{data.temp.max}{units === "standard" ? " K" : units === "imperial" ? "° F" : "° C"}</p>
                                </div>
                            </div>
                        )
                    })}
                </ScrollContainer>
            }
        </div>
    )
}

export default DailyForecast;