/* @flow */

import React from 'react';
import { Alert } from 'react-native';
import {
  Actions, Scene, ActionConst
} from 'react-native-router-flux';
import SignIn from 'containers/SignIn';
import SignUpComponent from 'containers/SignUp';
export default scenes = Actions.create (
<Scene key='root'>
 <Scene key ='Main'>
  <Scene
  key = 'SignIn'
  component={SignIn}
  initial={true}
  hideNavBar={true}
  type={ActionConst.REPLACE}
  title='SignIn'/>
  <Scene
  key = 'SignUp'
  component={SignUpComponent}
  hideNavBar={false}
  type={ActionConst.PUSH}
  title='SignUp'/>

 </Scene>
</Scene>
);
