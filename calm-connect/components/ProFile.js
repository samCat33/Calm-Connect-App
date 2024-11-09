import React from 'react';
import { View, Text } from 'react-native';

export default function ProFile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{"This is your profile!"}</Text>
    </View>
  );
}
