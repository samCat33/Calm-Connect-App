import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SMS from 'expo-sms';


export default function FreindChat({navigation}) {
  
  const [backgroundColor, setBackgroundColor] = useState('#fff9e9');
  
  return (
  <View style={[styles.container, { backgroundColor }]}>

        <Text style={styles.title}>Chat With Friend</Text>
        <View style={styles.contentContainer}> 
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => chat()}>
          <Text style={styles.paragraph}> Chat </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LogInScreen')}>
          <Text style={styles.paragraph}> Call </Text>
        </TouchableOpacity>
        
        </View>
      </View>
  )
}

function chat()
{
  const { result } = SMS.sendSMSAsync(
  ['8208889698', '8056383435'],
  'My sample HelloWorld message',
  {
    attachments: {
      uri: 'path/myfile.png',
      mimeType: 'image/png',
      filename: 'myfile.png',
    },
  }
);
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff9e9',
    color: '#fff9e9',
    setBackgroundColor: '#fff9e9',
    padding: 8,
  },
  contentContainer: {
    alignItems: 'center',
    width: 350,
    height: 900,
    justifyContent: 'center',
    backgroundColor: '#fff9e9',
    color: '#fff9e9',
    flex: 1, 
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    height: 30,
    width: 150,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#2FC7CA',
    borderRadius: 50,
  },

  logo: {
    width: 150,
    height: 250,
  },

  title: {
    backgroundColor: '#fff9e9',
    color: '#2FC7CA',
    fontWeight: 'bold',
    fontSize: 30, 
    fontFamily: ''
  },
});


