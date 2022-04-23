import React from 'react';

const Column = ({data}) => {
    return (
        <ul>
            {data.map((el)=>{return <li><a href="#">{el}</a></li>})}
        </ul>
    );
};

export default Column;