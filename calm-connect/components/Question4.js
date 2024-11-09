import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

export default function Question4({navigation}) {
    const [backgroundColor, setBackgroundColor] = useState('#fff9e9');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.question}>
       Do you hide your feelings to others?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Question5')}>
          <Text style={styles.button}>Often</Text>
        </TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Question5')}>
          <Text style={styles.button}>Sometimes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Question5')}>
          <Text style={styles.button}>Never</Text>
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
    padding: 20,
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
