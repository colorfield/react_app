import React, { Component } from 'react';
import api from './utils/api';
import './App.css';
import ArticleList from './components/ArticleList';

class App extends Component {
  render() {
      return (
          <div>
            <p>Hello React.</p>
            <p>The JSON API base url is {api.getApiBaseUrl()}.</p>
            <p>
              Example of data attribute from the React container:
              <code>data-entity-id = {api.getDataAttributeValue('entity-id')}</code>.
              The data attribute is defined in the <em>templates/react-app.html.twig</em> Twig template
              and can be used to pass information from Drupal to React.
            </p>
            <ArticleList title="Articles" />
          </div>
      );
  }
}
export default App;
