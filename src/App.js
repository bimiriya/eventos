import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Eventos from './components/Eventos';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />
        <Eventos />
      </div>
    );
  }
}

export default App;
