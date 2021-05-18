/**
 * 
 * 
 *  App
 * 
 * 
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Home from './Home';
import DettaglioFascicoli from './DettaglioFascicoli';

import {
  StatusBar,
} from 'react-native';

import { primaryColor, white } from '../constants/Colors';


const Stack = createStackNavigator();

const App = () => {
  const headerStyleHome = {
    title: ``,
    headerLeft: null,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: primaryColor,
    },
    headerTintColor: white,
  };
  const headerStyleDetails = {
    title: ``,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: primaryColor,
    },
    headerTintColor: white,
  };

  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor={primaryColor}
      />
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerShown:false,
            headerStyle:null,
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={headerStyleHome}
        />
        <Stack.Screen 
          name="Dettaglio Fascicolo" 
          component={DettaglioFascicoli} 
          options={headerStyleDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
