import React, { useState } from 'react';
import { Button, Text, View, Image, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';



function ProFile() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      
      <Image source={{ uri: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_account_circle_48px-512.png" }} style={{ width: 200, height: 200 }} />
      <Text style={{fontSize: 30}}>Welcome Pranav</Text>
      
      <Button
        title="Friend Count"
        color='#2FC7CA'
        />
      <Button
        title="Username"
        color='#2FC7CA'
        />
      <Button
        title="Credit Card"
        color='#2FC7CA'
        />
      <Button
        title="Phone"
        color='#2FC7CA'
        />
      <Button
        title="Credit points"
        color='#2FC7CA'
        />
    </View>
  );
}


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{fontWeight: 'bold', fontSize: 16}}>Hello Pranav !</Text>
      <Button
        title="Look at Friends"
        color='#2FC7CA'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'top', alignItems: 'left' }}>
    <h1>Here are your friends:</h1>
    <ul>
      <li>Samuel Koehnlein</li>
      <li>Dilveer Singh Gill</li>
      <li>Diljot Sidhu</li>
    </ul>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{fontWeight: 'bold', fontSize: 16, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{fontWeight: 'bold', fontSize: 16}}>Hello Pranav !</Text>
      <Button
        title="Go to settings"
        color='#2FC7CA'
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
         headerShown: false, 
}} />
      <HomeStack.Screen name="Details" component={DetailsScreen} options={{
         headerShown: false}} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{
         headerShown: false}}  />
      <SettingsStack.Screen name="Setting" component={SettingsScreen} options={{
         headerShown: false}}  />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
    const [backgroundColor, setBackgroundColor] = useState('#fff9e9');

  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} options={{
          headerShown: false, 
          tabBarActiveTintColor: '#2FC7CA',
          tabBarIcon: ({color}) => (
            <Ionicons 
              name="home-outline" 
              size={24} 
              color={color}  
            />
          )
        }}/>
        <Tab.Screen name="Settings" component={SettingsStackScreen} options={{
          headerShown: false, 
          tabBarActiveTintColor: '#2FC7CA',
          tabBarIcon: ({color}) => (
            <Ionicons 
              name="options-outline" 
              size={24} 
              color={color}  
            />
          )
        }}/>
      </Tab.Navigator>
    
  );
}
