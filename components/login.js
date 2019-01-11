import React, {Component} from 'react';
import {TextInput, StyleSheet,View, Text,TouchableOpacity} from 'react-native';

export default class login extends React.Component{
  render() {
    return (
      <View style ={styles.formContainer}>
        <TextInput 
          placeholder='username'
          placeholderTextColor='#292929'
          style={styles.textInput}
          underlineColorAndroid={'transparent'}/>
        <TextInput 
          placeholder='password'
          placeholderTextColor='#292929'
          secureTextEntry={true}
          style={styles.textInput}
          underlineColorAndroid={'transparent'}/>
        <TouchableOpacity style ={styles.button}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
      </View>
    ); 
  }
}
const styles = StyleSheet.create({
  formContainer: {
      alignSelf: 'stretch',
      paddingLeft: 20,
      paddingRight: 20,
  },
  textInput : {
    alignSelf : 'stretch',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginBottom: 20,
  },
  button:{
    alignSelf:'stretch',
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems:'center',
    padding:20,
  },
  btntext: {
    color: '#fff',
    fontSize: 18,
  }
}); 