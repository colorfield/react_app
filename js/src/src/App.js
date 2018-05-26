import React, { Component } from 'react';
import api from './utils/api';
import './App.css';

class App extends Component {
  render() {
      return (
          <div>
              Hello React.
              Api base url is {api.getApiBaseUrl()}
          </div>
      );
  }
}
export default App;
