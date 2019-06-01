/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';


import Driverdetails from './app/component/Driverdetails';
import DriverAccepted from './app/component/DriverAccepted';
import Home from './app/component/Home';
import HomeAccepted from './app/component/HomeAccepted';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground style={styles.container}>
      <HomeAccepted />
   </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
