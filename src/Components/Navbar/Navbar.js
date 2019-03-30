import React from 'react';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <span className="brand-logo">Clicky Game</span>
                        <ul className="right">
                            <li><h5 href="sass.html">Score: | Top Score: </h5></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;