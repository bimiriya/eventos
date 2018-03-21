import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login'
import DialogExampleModal from './components/Modal/modal.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login />
        <MuiThemeProvider>
          <DialogExampleModal />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
