import React, { useState } from 'react';

import { Text, View, StyleSheet, TouchableOpacity, Image, Button, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}
function SettingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{ uri: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_account_circle_48px-512.png" }} style={{ width: 200, height: 200 }} />
      <Text style={{fontSize: 30}}>Welcome! </Text>
      
      <Button style={{fontWeight: 'bold', fontSize: 16, margin: 15}}
        title="Email"
        color='#2FC7CA'
        />
      <Button  style={{fontWeight: 'bold', fontSize: 16, margin: 15}}
        title="Username"
        color='#2FC7CA'
        />
      <Button style={{fontWeight: 'bold', fontSize: 16, margin: 15}}
        title="Credit Card"
        color='#2FC7CA'
        />
      <Button style={{fontWeight: 'bold', fontSize: 16, margin: 15}}
        title="Phone"
        color='#2FC7CA'
        />
      <Button style={{fontWeight: 'bold', fontSize: 16, margin: 15}}
        title="Promo Codes"
        color='#2FC7CA'
        />
    </View>
  );
}
function ProfilesScreen()
{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{ uri: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_account_circle_48px-512.png" }} style={{ width: 200, height: 200 }} />
      <Text style={{fontSize: 30}}>Welcome!</Text>
      <Button style={{fontWeight: 'bold', fontSize: 16, margin: 15}}
        title="Friends"
        color='#2FC7CA'
        />

      <Button style={{fontWeight: 'bold', fontSize: 16, margin: 15}}
        title="Friends"
        color='#2FC7CA'
        />
        
      <Button style={{fontWeight: 'bold', fontSize: 16, margin: 15}}
        title="Your Progress"
        color='#2FC7CA'
        />
      <Button style={{fontWeight: 'bold', fontSize: 16, margin: 15}}
        title="Your Activities"
        color='#2FC7CA'
        />
    </View>
  );
}


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{fontWeight: 'bold', fontSize: 16}}>{"HomeBase!"}</Text>
      <TouchableOpacity  onPress={() => navigation.navigate('DriverSign')}>
      
      <Text style={{backgroundColor:'#2FC7CA', color: 'white', borderRadius: 50, height: 30, AlignItems: 'center', TextAlign: 'center', JustifyContent: 'center', fontWeight: 'bold', fontSize: 16, margin: 15 , width: 180}}> Mood Calculator </Text>
      
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate('Question1')}>
      
      <Text style={{backgroundColor:'#2FC7CA', color: 'white', borderRadius: 50, height: 30, AlignItems: 'center', TextAlign: 'center', JustifyContent: 'center', fontWeight: 'bold', fontSize: 16, margin: 15 , width: 180}}> Quiz </Text>
      
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate('Nearby')}>
      
      <Text style={{backgroundColor:'#2FC7CA', color: 'white', borderRadius: 50, height: 30, AlignItems: 'center', TextAlign: 'center', JustifyContent: 'center', fontWeight: 'bold', fontSize: 16, margin: 15 , width: 180}}> Events Near You </Text>
      
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate('Educational')}>
      
      <Text style={{backgroundColor:'#2FC7CA', color: 'white', borderRadius: 100, height: 30, AlignItems: 'center', TextAlign: 'center', JustifyContent: 'center', fontWeight: 'bold', fontSize: 16, margin: 15, width: 180}}> Resources </Text>
      
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate('Friends')}>
      
      <Text style={{backgroundColor:'#2FC7CA', color: 'white', borderRadius: 50, height: 30, AlignItems: 'center', TextAlign: 'center', JustifyContent: 'center', fontWeight: 'bold', fontSize: 16, margin: 15,  width: 180}}> Connect With Friends </Text>
      
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>{"Have a good day!"}</Text>
      <TouchableOpacity
        
        onPress={() => navigation.navigate('Setting')}
      >
      <Text style={{backgroundColor:'#2FC7CA', color: 'white', borderRadius: 50, height: 30, AlignItems: 'center', TextAlign: 'center', JustifyContent: 'center',}}> Go To settings </Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>{"Remember to take breaks!"}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ProFile')}>

      <Text style={{backgroundColor:'#2FC7CA', color: 'white', borderRadius: 50, height: 30, AlignItems: 'center', TextAlign: 'center', JustifyContent: 'center',}}> Go To Your Profile </Text>
      </TouchableOpacity>
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
      <SettingsStack.Screen name="Setting" component={SettingScreen} options={{
         headerShown: false}}  />
    </SettingsStack.Navigator>
  );
}

const ProfilesStack = createNativeStackNavigator();

function ProfileStackScreens() {
  return (
    <ProfilesStack.Navigator>
      <ProfilesStack.Screen name="Your Profile" component={ProfileScreen} options={{
         headerShown: false}}  />
      <ProfilesStack.Screen name="This Profile" component={ProfilesScreen} options={{
         headerShown: false}}  />
    </ProfilesStack.Navigator>
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
        <Tab.Screen name="Your Profile" component={ProfileStackScreens} options={{
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
