import React from 'react';
import "./Dogs.css";

function Dogs(props) {
    return (
        <div className="col">
            <div className="card hoverable" onClick={() => props.click(props.data.clicked, props.data.id)}>
                <div className="card-image">
                    <div className="dogCard">
                        <img className="dogImg" alt="#" src={props.data.image}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dogs;