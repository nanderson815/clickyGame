import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="valign-wrapper">
            <div className="center-block">
                <h2 className="white-text center-align">Clicky Game!</h2>
                <h4 className="white-text center-align">Click on an image to earn points, but don't click on any more than once!</h4>
            </div>
        </header>
    )
}

export default Header;