import React, { Component } from 'react';
import Captcha from "./Captcha"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Captcha/>
        </header>
      </div>
    );
  }
}

export default App;
