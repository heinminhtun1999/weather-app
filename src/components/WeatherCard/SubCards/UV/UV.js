import React from "react";
import "./UV.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const UV = (props) => {

    const { isPending_wt, currentWeather } = props;

    const { uv } = currentWeather

    return (
        <div className={`uv subcard card ${isPending_wt && "loading"}`}>
             { !isPending_wt && 
                    <div className="uv-content subcard-content">
                        <div className="uv-title subcard-title">
                            <WbSunnyIcon style={{fontSize: "18px"}}/>
                            <p>UV INDEX</p>
                        </div>
                        <h1 className="uv-index">{uv}</h1>
                        <div className="uv-indicator-bar">
                            <div className="uv-indicator" style={{left: uv > 10 ? "96%" : `${uv * 10 > 96 ? 96 : uv * 10}%`}}></div>
                        </div>
                        <h2 className="uv-desc">{uv < 3 ? "Low" : uv > 2 && uv < 6 ? "Moderate" : uv > 5 && uv < 8 ? "High" : uv > 7 && uv < 11 ? "Very High" : "Extreme"}</h2>
                    </div>
            }
        </div>
    )
}

export default UV;