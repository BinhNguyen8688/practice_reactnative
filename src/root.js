/* @flow */

import React, { Component } from 'react';
import { Router } from 'react-native-router-flux';
import scenes from 'config/routes';
import {Provider} from 'react-redux';
import store from 'config/store';

export default class Root extends Component {
  render() {
    return (
      <Provider store ={store}>
        <Router scenes={scenes}/>
      </Provider>
    );
  }
}
