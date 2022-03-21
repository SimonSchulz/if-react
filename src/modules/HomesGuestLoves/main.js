import "./styles.css"
// eslint-disable-next-line no-unused-vars
import HomesItem from "./Item";
import {data} from "./data";

export  default function HomesGuestLoves() {
    return (
        <section className="homes_main_section">
            <div className="wrapper">
                <h2>Homes guest loves</h2>
                <div className="homes_item_container">
                    {data.map(i=> <HomesItem key = {i.id} item={i} />) }
                </div>
            </div>
        </section>
    )
}
