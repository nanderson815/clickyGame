import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <h5 className="left">Clicky Game</h5>
                        <ul className="right">
                            <li><h5 href="sass.html">Score: {props.score} | Top Score: {props.topScore}</h5></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;