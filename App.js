
import React ,  { useState }from 'react';
import {
    Image,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppContextProvider } from './src/ASM/Ultil/AppContext';
import AppNavigator from './src/ASM/Ultil/AppNavigator';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <AppContextProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AppContextProvider>
    );
};


export default App;
