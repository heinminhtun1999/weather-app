import React from "react";
import "./SubCards.css";
import Wind from "./Wind/Wind";
import Humidity from "./Humidity/Humidity";
import UV from "./UV/UV";
import Pressure from "./Pressure/Pressure";
import Sun from "./Sun/Sun";
import Visibility from "./Visibility/Visibility";;

const SubCards = (props) => {

    const { isPending_wt, currentWeather, units } = props;

    return (
        <div className="sub-cards">
            <UV isPending_wt={isPending_wt} currentWeather={currentWeather} units={units} />
            <Humidity isPending_wt={isPending_wt} currentWeather={currentWeather} units={units} />
            <Sun isPending_wt={isPending_wt} currentWeather={currentWeather} units={units} />
            <Visibility isPending_wt={isPending_wt} currentWeather={currentWeather} units={units} />
            <Pressure isPending_wt={isPending_wt} currentWeather={currentWeather} units={units} />
            <Wind isPending_wt={isPending_wt} currentWeather={currentWeather} units={units} />
        </div>
    )
}

export default SubCards;