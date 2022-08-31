import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { BookDetail, Home } from './screens/';
import { useFonts } from 'expo-font';
import { View, Text, Button } from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        // initialRouteName={'Home'}
      >
        <Stack.Screen name='Dammy' component={Dammy} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='BookDetail'
          component={BookDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Dammy({ navigation }) {
  return (
    <View style={{ padding: 40 }}>
      <Text>Just dammy</Text>
      <Button title='home' onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default App;

// jpj
