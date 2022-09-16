import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section className="App-section">
        <h1>Welcome</h1>
      </section>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
