import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import NotasAlunoScreen from './components/NotasAlunoScreen';
import ListaTelefonicaScreen from './components/ListaTelefonicaScreen'; // Certifique-se de ajustar o caminho

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NotasAlunoScreen" component={NotasAlunoScreen} />
        <Stack.Screen name="ListaTelefonicaScreen" component={ListaTelefonicaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
