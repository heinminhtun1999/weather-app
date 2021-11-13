import React from "react";
import "./Nav.css";
import Search from "./Search/Search";

const Nav = (props) => {

    const { handleClick, handleChange, limitedFilteredCity, searchField, unitsChange } = props
    return (
        <nav>
            <h1>Weather</h1>
            <div className="units">
                <label>Units:</label>
                <select onChange={unitsChange}>
                    <option>Standard</option>
                    <option>Imperial</option>
                    <option>Metric</option>
                </select>
            </div>
            <Search handleChange={handleChange} searchField={searchField} limitedFilteredCity={limitedFilteredCity} handleClick={handleClick} />
        </nav>
    )
}

export default Nav;