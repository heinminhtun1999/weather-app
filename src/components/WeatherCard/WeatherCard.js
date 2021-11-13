import React from "react";
import "./WeatherCard.css";
import MainCard from "./MainCard/MainCard";
import SubCards from "./SubCards/SubCards";
import HourForecast from "./HourForecast/HourForecast";
import DailyForecast from "./DailyForecast/DailyForecast";

const WeatherCard = (props) => {

    const { isPending_wt, currentWeather, dailyWeather, hourlyWeather, RGCity, units } = props;

    return (
        <div className="weather-card">
            <div className="cards">
            <MainCard isPending_wt={isPending_wt} currentWeather={currentWeather} dailyWeather={dailyWeather} RGCity={RGCity} units={units} />
            <SubCards isPending_wt={isPending_wt} currentWeather={currentWeather} units={units} />
            <HourForecast isPending_wt={isPending_wt} hourlyWeather={hourlyWeather} units={units} currentWeather={currentWeather}/>
            <DailyForecast isPending_wt={isPending_wt} dailyWeather={dailyWeather} units={units} />
            </div>
        </div>
    )
}

export default WeatherCard;