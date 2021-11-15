import React from "react";
import "./Sun.css";
import sunrise from "../icons/sunrise.png";
import sunset from "../icons/sunset.png";

const Sun = (props) => {

    const { isPending_wt, currentWeather } = props;

    return (
        <div className={`sun subcard card ${isPending_wt && "loading"}`}>
            {!isPending_wt &&
                <div className="sun-content subcard-content">
                    <div className="sunrise">
                        <div className="sun-title subcard-title">
                        <img src={sunrise} alt="sunrise-icon" className="sunrise-icon icon"></img>
                        <p>SUNRISE</p>
                        </div>
                        <h2>{currentWeather.sunrise}</h2>
                    </div>
                    <div className="sunset">
                    <div className="sun-title subcard-title">
                        <img src={sunset} alt="sunset-icon" className="sunset-icon icon"></img>
                        <p>SUNSET</p>
                        </div>
                        <h2>{currentWeather.sunset}</h2>
                    </div>
                </div>
            }
        </div>
    )
}

export default Sun;