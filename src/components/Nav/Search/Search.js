import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css";

const Search = (props) => {

    const { handleClick, handleChange, limitedFilteredCity, searchField } = props;
    

    return (
        <div className="search-div">
            <div className="parent-search-bar">
                <SearchIcon style={{ fontSize: "20px" }} />
                <input type="search" placeholder="Find City" onChange={handleChange} value={searchField} className="search-bar" />
            </div>
            {searchField.length > 0 && 
                <div className="search-result">
                {limitedFilteredCity.map(city => {
                    return (
                        <p onClick={handleClick} key={city.id} data-lat={city.lat} data-lon={city.lon} className="search-result-p">{city.cityName}</p>
                    )
                })}
            </div>
            }
        </div>
    )
}

export default Search;