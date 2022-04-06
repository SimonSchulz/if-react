import React from 'react';
import "./styles.css"

const Item = (i) => {
    return <div className="hotel_item">
        <img className="item_img" src={i.item.imageUrl} alt="Hotel_picture"/>
        <div className="item_name">{i.item.name}</div>
        <div className="item_place">{i.item.city}, {i.item.country}</div>
        </div>

}
export default Item;
