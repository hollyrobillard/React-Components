import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

import Coffees from './Coffees';

export default function Footer() {
    return (
        <div className="Footer">
            <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
            <Coffees />
        </div>
    );
}