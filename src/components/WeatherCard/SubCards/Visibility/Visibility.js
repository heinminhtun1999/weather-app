import React from "react";
import "./Visibility.css";
import VisibilityIcon from '@mui/icons-material/Visibility';

const Visibility = (props) => {

    const { isPending_wt, currentWeather } = props;
    const { visibility } = currentWeather;

    return (
        <div className={`visibility subcard card ${isPending_wt && "loading"}`}>
            {!isPending_wt &&
                <div className="visibility-content subcard-content">
                    <div className="visibility-title subcard-title">
                        <VisibilityIcon style={{ fontSize: "18px" }} />
                        <p>VISIBILITY</p>
                    </div>
                    <div className="visibility-value-parent">
                    <h1 className="visibility-value">{visibility >= 1000 ? visibility / 1000 + " km" : visibility + "m"}</h1>
                     </div>   
                </div>
            }
        </div>
    )
}

export default Visibility;