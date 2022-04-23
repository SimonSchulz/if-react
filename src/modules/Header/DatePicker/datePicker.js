import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datePicker.css'
import {findAllByDisplayValue} from "@testing-library/react";

const MyDataPicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
            <div className="second_input">
                <DatePicker
                    name="datepicker"
                    className="calender"
                    selected={startDate}
                    minDate={new Date()}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    monthsShown={2}
                    dateFormat='E, MMM d'
                />
            </div>
    );
};

export default MyDataPicker;