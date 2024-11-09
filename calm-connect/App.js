import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TitleScreen from './components/TitleScreen';
import SignInScreen from './components/SignInScreen';
import Friends from './components/Friends';
import FreindChat from './components/FreindChat';
import Home from './components/Home';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Questions3';
import Question4 from './components/Question4';
import Question5 from './components/Question5';
import Question6 from './components/Question6';
import Question7 from './components/Question7';
import Question8 from './components/Question8';
import Question9 from './components/Question9';
import Question10 from './components/Question10';
import Nearby from './components/Nearby';
import Educational from './components/educational';
import CreateAccount from './components/CreateAccount';
const Stack = createNativeStackNavigator();
import ProFile from './components/ProFile'


function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{"Remember to take breaks!"}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProFile')} // Navigate to 'ProFile' instead of 'Profile'
      >
        <Text style={styles.touchableButton}>Go To Your Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

// ... (existing components)

const ProfilesStack = createNativeStackNavigator();

function ProfileStackScreens() {
  return (
    <ProfilesStack.Navigator>
      <ProfilesStack.Screen name="Your Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <ProfilesStack.Screen name="This Profile" component={ProfilesScreen} options={{ headerShown: false }} />
      <ProfilesStack.Screen name="ProFile" component={ProFile} options={{ headerShown: false }} /> {/* New screen for ProFile */}
    </ProfilesStack.Navigator>
  );
}

// ... (rest of the code)


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TitleScreen"
          component={TitleScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name = "CreateAccount"
          component={CreateAccount}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Friends"
          component={Friends}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FreindChat"
          component={FreindChat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Question1"
          component={Question1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Question2"
          component={Question2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Question3"
          component={Question3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Question4"
          component={Question4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Question5"
          component={Question5}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Question6"
          component={Question6}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Question7"
          component={Question7}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Question8"
          component={Question8}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Question9"
          component={Question9}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Question10"
          component={Question10}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Educational"
          component={Educational}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Nearby"
          component={Nearby}
          options={{
            headerShown: false,
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
