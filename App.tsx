import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//importação do Provider
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ProfileScreen from './src/components/screens/ProfileScreen';
import NotificationsScreen from './src/components/screens/NotificationsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Profile"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}