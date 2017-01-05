/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';
import Index from './component/Index.js'

export default class cto extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{ title: 'Index', component: Index }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }
}

AppRegistry.registerComponent('cto', () => cto);
