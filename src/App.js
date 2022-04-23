import './App.css';
import Header from "./modules/Header/main";
import HotelDrawSection from "./modules/HotelDrawSection/main";
import React, {useEffect, useState} from "react";
import Footer from "./modules/Footer/footer";

function App() {
    const [data,setData]= useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
            .then(response => response.json())
            .then(setData)
    }, [])

  return (
      <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          {(searchValue.length>0) ?
              <HotelDrawSection text={"Available hotels"} data={searchValue} />
              :<HotelDrawSection text={"Hotel not found"} data={[]}/> }
      <HotelDrawSection text={"Homes Guest loves"} data={data} />
          <Footer/>
      </>
  );
}

export default App;
