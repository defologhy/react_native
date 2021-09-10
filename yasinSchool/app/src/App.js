import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import Home from './Home';
import Pendaftaran from './Pendaftaran'
import Login from './Login'

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Pendaftaran" component={Pendaftaran} 
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: 'green',
              
            },
            headerTitleAlign:'center',
            headerTintColor: '#fff'
            }}
            />
            <Stack.Screen name="Login" component={Login} options={{ 
            headerShown: false
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
