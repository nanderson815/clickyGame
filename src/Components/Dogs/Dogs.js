import React from 'react';
import "./Dogs.css";

function Dogs(props) {
    console.log(props);
    return (
        <div className="dogCard">
            <img className="dogImg" alt="#" src={props.data.image}></img>
        </div>
    )
}

export default Dogs;