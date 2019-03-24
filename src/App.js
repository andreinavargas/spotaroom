import React, { Component } from 'react';
import './App.css';
import {ThemeProvider} from 'styled-components'
import * as theme from  './Theme'
import Home from './Containers/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Home> </Home>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
