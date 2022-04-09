import React, {useEffect, useState} from 'react';
import "../../Container/style.css";
import "./style.css";

const InputDestination = ({__searchValue, setSearchValue}) => {
     let search;
     const [value, setValue] = useState("");
    const handleClick = (e) => {
        setValue(search)
    }

    useEffect(() => {

        fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${value}`)
            .then(response => response.json())
            .then(data=> setSearchValue(data))
    }, [value])

    return (
    <>
        <label htmlFor="destination" > Your destination or hotel name </label>
        <input type="text" id={`destination`}  required onChange={e=>search=e.target.value}/>
        <button className="search" onClick={handleClick}>search</button>
    </>
    );
};

export {InputDestination}