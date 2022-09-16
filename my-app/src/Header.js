import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Header.css"

export default function Header() {
    const coffees = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const coffeeIcons = coffees.map((index) => 
        <span className="coffee" key={index}>
            <FontAwesomeIcon icon="coffee" size="lg" color="white" />
        </span>
   );

    return(
        <div className="Header">
            {coffeeIcons}
        </div>
    )
}