import React, { Component } from 'react';
import './App.css';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCoffee)

class App extends Component {
  render() {
    return (
      <div className="App">
        <FontAwesomeIcon icon='coffee'></FontAwesomeIcon>
      </div>
    );
  }
}

export default App;
