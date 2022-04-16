import React, {useEffect, useState} from 'react';
import "../../Container/style.css";
import "./style.css";
import MyDataPicker from "../DatePicker/datePicker";
import PeopleRoomInput from "../PeopleRoomInput/main";

const InputDestination = ({__searchValue, setSearchValue}) => {
    let search;
    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0)
    const [rooms, setRooms] = useState(1)
    const [stateMenu, setStateMenu] = useState(false)
    const [value, setValue] = useState("");
    const clickMenu = (e) => {
        e.stopPropagation()
        setStateMenu(!stateMenu);
    }
    const handleClick = (e) => {
        setValue(search)
    }
    useEffect(() => {
        fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${value}&adults=${adults}&children=${children}&rooms=${rooms}`)
            .then(response => response.json())
            .then(data=> setSearchValue(data))
    }, [value])
    return (
    <>
        <label htmlFor="destination" > Your destination or hotel name </label>
        <input type="text" id={`destination`}  required onChange={e=>search=e.target.value}/>
        <MyDataPicker/>
        <div className="peopleRoomsInput" onClick={clickMenu}>
            <span>{adults} Adults </span>—
            <span>{children} Children</span>—
            <span>{rooms} Room</span>
        </div> {
            stateMenu && <PeopleRoomInput adultsCount={adults}
                                                  childrenCount={children}
                                                  roomsCount={rooms}
                                                  setAdultsCount={setAdults}
                                                  setChildrenCount={setChildren}
                                                  setRoomsCount={setRooms} />
        }
        <button className="search" onClick={handleClick}>search</button>
    </>
    );
};

export {InputDestination}