import React from 'react';
import "../../Container/style.css";
import "./style.css";
import {SvgLogo, SvgAccount, SvgThemeSwitch} from "./SvgComponents";
const Navigation = () => {
    return (
        <div className="wrapper">
            <SvgLogo/>
            <div>
                <a href="#">Stays</a>
                <a href="#">Attractions</a>
                <SvgThemeSwitch/>
                <SvgAccount/>
            </div>
        </div>
    );
};

export default Navigation;