import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import {View, Text} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import  LoginScreen  from './src/screens/LoginScreen';
import  EditarObra  from './src/screens/EditarObra';
import  ExcluirObra from './src/screens/ExcluirObra';
import  RevisarObra  from './src/screens/RevisarObra';
import  ListarObras  from './src/screens/ListarObras';
import  CadastrarObra  from './src/screens/CadastrarObra';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="ListarObras">
            <Stack.Screen
                name="ListarObras"
                component={ListarObras}
                options={{ headerShown: false }}   
            />
            <Stack.Screen
                name="CadastrarObra"
                component={CadastrarObra}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EditarObra"
                component={EditarObra}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ExcluirObra"
                component={ExcluirObra}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RevisarObra"
                component={RevisarObra}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
  </NavigationContainer>
       
        
    );
};

export default App;   