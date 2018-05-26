import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import api from './utils/api';

const appContainer = document.getElementById(api.getAppContainerId());

if (appContainer) {
  ReactDOM.render(<App />, appContainer);
}
