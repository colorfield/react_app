import React, { Component } from 'react';
import api from './utils/api';
import './App.css';
import ArticleList from './components/ArticleList';

class App extends Component {
  render() {
      return (
          <div>
            <p>Hello React. Api base url is {api.getApiBaseUrl()}</p>
            <ArticleList title="Articles" />
          </div>
      );
  }
}
export default App;
