import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCoffee} from "@fortawesome/free-solid-svg-icons"

export default function Coffees() {
    const coffees = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const coffeeIcons = coffees.map((index) => 
        <span className="coffee" key={index}>
            <FontAwesomeIcon icon={faCoffee} size="lg" color="white" />
        </span>
   );

    return(
        <div className="Coffees">
            {coffeeIcons}
        </div>
    )
}