import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import Coffees from './Coffees';

export default function Footer() {
    return (
        <footer className="Footer">
            <hr />
            <div className="footer-icons">
                <span className="footer-icon">
                    <a href="https://www.linkedin.com/in/hollyrobillard/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" className="icon" />
                    </a>
                </span>
                <span className="footer-icon">
                    <a href="https://github.com/hollyrobillard/React-Components" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="lg" className="icon" />
                    </a>
                </span>
            </div>
            <Coffees />
        </footer>
    );
}