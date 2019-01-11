import React, {Component} from 'react';
import {ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';

import Login from './components/login';
export default class App extends React.Component{
  render() {
    return (
        <KeyboardAvoidingView behavior = 'padding' style={styles.wrapper}>
          <ImageBackground style ={styles.container} source ={require('./img/imgg.png')}>
            <Text style ={styles.header}>- LOGIN -</Text>
            <Login />
          </ImageBackground>
        </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper : {
    flex:1,
  }, 
  container: {
    flex:1,
    alignSelf: 'stretch',
    width : null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
    fontSize: 38,
    color: '#fff',
    fontWeight : 'bold',
    marginBottom: 100,
  }
});