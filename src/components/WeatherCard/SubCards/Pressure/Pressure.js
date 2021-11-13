import React from "react";
import "./Pressure.css";
import pressure from "../icons/pressure.png";

const Pressure = (props) => {

    const { isPending_wt, currentWeather } = props

    return (
        <div className={`pressure subcard card ${isPending_wt && "loading"}`}>
            {!isPending_wt &&
                <div className="pressure-content">
                    <div className="pressure-title">
                        <img src={pressure} alt="pressure-icon" className="pressure-icon" />
                        <p>PRESSURE</p>
                    </div>
                    <h1 className="pressure-value">{currentWeather.pressure} hPa</h1>
                </div>
            }
        </div>
    )
}

export default Pressure;