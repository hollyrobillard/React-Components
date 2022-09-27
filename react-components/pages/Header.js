import React from 'react';
import Coffees from './Coffees';

export default function Header() {
    return(
        <header className = "Header">
            <Coffees />
            <div className="Title">
                React Components
            </div>
            <hr />
        </header>
    )
}