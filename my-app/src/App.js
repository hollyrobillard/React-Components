import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faHatCowboy, faHatChef)

import React from "react"
import Header from "./Header"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
