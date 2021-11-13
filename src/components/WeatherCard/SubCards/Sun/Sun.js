import React from "react";
import "./Sun.css";
import sunrise from "../icons/sunrise.png";
import sunset from "../icons/sunset.png";

const Sun = (props) => {

    const { isPending_wt, currentWeather } = props;

    return (
        <div className={`sun subcard card ${isPending_wt && "loading"}`}>
            {!isPending_wt &&
                <div className="sun-content">
                    <div className="sunrise">
                        <img src={sunrise} alt="sunrise-icon" className="sunrise-icon icon"></img>
                        <p>SUNRISE</p>
                        <h2>{currentWeather.sunrise}</h2>
                    </div>
                    <div className="sunset">
                        <img src={sunset} alt="sunset-icon" className="sunset-icon icon"></img>
                        <p>SUNSET</p>
                        <h2>{currentWeather.sunset}</h2>
                    </div>
                </div>
            }
        </div>
    )
}

export default Sun;