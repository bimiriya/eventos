import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogExampleModal from './Modal/modal.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <DialogExampleModal />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
