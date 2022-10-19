import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';
import { AddTask, Home } from '../Screens';
const Stack = createNativeStackNavigator();
const Routes=()=> {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name={NavigationStrings.HOME} component={Home} />
          <Stack.Screen name={NavigationStrings.ADD_TASK} component={AddTask}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default Routes;