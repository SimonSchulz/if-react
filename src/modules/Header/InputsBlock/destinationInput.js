import React, {useState} from 'react';
import "../../Container/style.css";
import "./style.css";
import {data} from "../../HotelDrawSection/data";

const InputDestination = ({searchValue, setSearchValue}) => {
    const [value, setValue] = useState("0");

    const handleClick = () => {
        searchValue = data.filter(data => {
            return data.name.toLowerCase().includes(value) ||
                data.city.toLowerCase().includes(value) ||
                data.country.toLowerCase().includes(value)
        })
        setSearchValue(searchValue);
        return setSearchValue;
    }
    return (
    <>
        <label htmlFor="destination"> Your destination or hotel name </label>
        <input type="text" id={`destination`} required onChange={(e)=>setValue(e.target.value)}/>
        <button className="search" onClick={handleClick}>search</button>
    </>
    );
};

export {InputDestination }