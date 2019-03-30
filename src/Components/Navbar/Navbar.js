import React from 'react';

function Navbar(props) {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <span className="brand-logo">Clicky Game</span>
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