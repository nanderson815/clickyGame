import React from 'react';
import "./Dogs.css";

function Dogs(props) {
    return (
        <div className="col s12 m4 l3">
            <div className="card hoverable" onClick={() => props.click(props.data.clicked, props.data.id)}>
                <div className="card-image">
                        <img className="dogImg" alt="#" src={props.data.image}></img>
                </div>
            </div>
        </div>
    )
}

export default Dogs;