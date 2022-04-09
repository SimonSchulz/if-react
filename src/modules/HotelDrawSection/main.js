import "../Container/style.css"
import "./styles.css"
import "./h2.css"
// eslint-disable-next-line no-unused-vars
import Item from "./Item";
import {useState} from "react";
export  default function HotelDrawSection({text, data}) {
    const sliderLength = 4;
    const [sliderStartIndex, setSliderStartIndex] = useState(0);

    const handlePrevClick = () => {
        if(sliderStartIndex > 0) {
            setSliderStartIndex(sliderStartIndex - 1 );
        }
    }

    const handleNextClick = () => {
        if(sliderStartIndex < data.length - sliderLength) {
            setSliderStartIndex(sliderStartIndex + 1 );
        }
    }
    return (
        <section className="hotel_main_section">
            <div className="Container">
                <h2>{text}</h2>
                <div className="hotel_item_container">
                    <button className="btn_prev" onClick={handlePrevClick}>{"<"}</button>
                    {data.slice(sliderStartIndex, sliderLength + sliderStartIndex)
                        .map(i=> <Item key = {i.id} item={i} />) }
                    <button className="btn_next" onClick={handleNextClick}>{">"}</button>
                </div>
            </div>
        </section>
    )
}
