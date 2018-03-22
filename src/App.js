import React, { Component } from 'react';
import Login from './components/Login'
import newEvent from './components/Modal/modal.js';
import logo from './logo.svg';
import FontAwesome from 'react-fontawesome';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Eventos from './components/Eventos';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />
        <Eventos />
        <Footer />
      </div>
    );
  }
}

export default App;
