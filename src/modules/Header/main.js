import React from 'react';
import "./style.css";
import "../Container/style.css";
import Navigation from "./Navigation/navigation";
import {InputDestination} from "./InputsBlock/InputsForm";
import SvgLinks from "./Navigation/SvgLinks";
const Header = ({searchValue, setSearchValue}) => {
    return (
        <section className="header">
            <div className="dark">
                <div className="Container">
                    <Navigation/>
                    <h1>Discover stays <br/>to live, work or just relax</h1>
                    <div className="inputsWrapper">
                    <InputDestination searchValue={searchValue} setSearchValue={setSearchValue}/>
                    </div>
                    <SvgLinks/>
                </div>
            </div>
        </section>
    );
};

export default Header;