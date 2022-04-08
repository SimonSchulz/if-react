import './App.css';
import Header from "./modules/Header/main";
import {data} from "./modules/HotelDrawSection/data";
import HotelDrawSection from "./modules/HotelDrawSection/main";
import React, {useState} from "react";

function App() {
    const [searchValue, setSearchValue] = useState([]);
  return (
      <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
          {(searchValue.length>0) ?
              <HotelDrawSection text={"Available hotels"} data={searchValue} />
              :<HotelDrawSection text={"Hotel not found"} data={[]}/> }
      <HotelDrawSection text={"Homes Guest loves"} data={data} />
      </>
  );
}

export default App;
