import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import React, {useState, useCallback} from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

export default function Educational({navigation}) {
    const [backgroundColor, setBackgroundColor] = useState('#fff9e9');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.question}>
       Educational sites you may want to use
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://education.psychiatry.org/Public/Catalog/StackHome.aspx')}>
          <Text style={styles.button}>American Psychiatric Assosiation</Text>
        </TouchableOpacity>
<TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/search/therapist+near+me')}>
          <Text style={styles.button}>Jed Foundation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('https://mhanational.org/MentalHealthInfo')}>
          <Text style={styles.button}>Mental Health America</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  question: {
    margin: 12,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 50
  },
  button: {
    padding: 2,
    alignItems: 'center',
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#2FC7CA',
    borderRadius: 50,
  },
});
