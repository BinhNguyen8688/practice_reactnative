/* @flow */

import React, { Component } from 'react';
import { Router } from 'react-native-router-flux';
import scenes from 'config/routes';

export default class Root extends Component {
  render() {
    return (
      <Router scenes={scenes}/>
    );
  }
}
