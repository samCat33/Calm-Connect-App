import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function CreateAccount({navigation}) {
  const [backgroundColor, setBackgroundColor] = useState('#fff9e9');
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style = {styles.title}>
        Create an Account
      </Text>  

    <TextInput
      style={styles.input}
      placeholder = "Enter an email"
      keyboardType = "email-address"
    />

    <TextInput
      style={styles.input}
      placeholder = "Create a username"
      keyboardType = "user"
    />

    <TextInput
      style={styles.input}
      placeholder = "Create a password"
      keyboardType = "password"
    />

    <TextInput
      style={styles.input}
      placeholder = "Verify password"
      keyboardType = "verifyPassword"
    />


    <TouchableOpacity onPress={() => navigation.navigate("TitleScreen")}>
      <Text style = {styles.button} >
        Create Account!
      </Text>
    </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  title: {
    justifyContent: 'center',
    textAlign: "center",
    position: 'relative',
    fontWeight: 'bolder',
    fontSize: 48,
    border: "medium double black",
    color:"#000000",
  },

  input: {
    marginTop: 20,
    borderBottomWidth: 2,
    padding: 5,
    borderColor: "black",
  },

  button: {
    color: "white",
    fontWeight: "bolder",
    backgroundColor: '#2FC7CA',
    borderRadius: 50,
    padding:5,
    height: 30,
    width: 150,
    marginTop:30,
    textAlign: 'center',
  },

})