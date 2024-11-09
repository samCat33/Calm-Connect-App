import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function SignInScreen({navigation}) {
    const [backgroundColor, setBackgroundColor] = useState('#fff9e9');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Sign in to your Account</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.button}> Sign in </Text>
      </TouchableOpacity>
      
      <TextInput
         style={{borderColor: 'black', borderBottomWidth:2, padding:5}}
         placeholder = "Goals For Today"
         keyboardType = "email-adress"
         bordercolor = 'black'
         
      />
      <TextInput
         style={{borderColor: 'black', borderBottomWidth:2, padding:5}}
         placeholder = "Daily Journal"
         keyboardType = "email-adress"
         bordercolor = 'black'
         
      />
      <TextInput
         style={{borderColor: 'black', borderBottomWidth:2, padding:5}}
         placeholder = "Todays Moral"
         keyboardType = "email-adress"
         bordercolor = 'black'
         
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center', 
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 30,
    bottom: 500,
  },
  button: { 
    justifyContent: 'center',
    alignItems: 'center', 
    position: 'absolute',
    width: 100,
    margin: 120,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#2FC7CA',
    borderRadius: 50,
    bottom: -370,
  },
  back: {
    justifyContent: 'center',
    alignItems: 'center', 
    position: 'absolute',
    margin: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#2FC7CA',
    borderRadius: 50,
    bottom: -250,
    width: 40,
  }
});
