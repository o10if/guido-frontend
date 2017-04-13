import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './app/App';

export default class Root extends Component {
  render() {
    return (
      <App />
    );
  }
}
