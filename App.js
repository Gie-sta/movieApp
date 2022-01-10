import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import BrowseScreen from './screens/BrowseScreen';
import DetailsScreen from './screens/DetailsScreen';
import PlayerScreen from './screens/PlayerScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
            <Stack.Navigator 
             screenOptions={{
                 headerStyle: { backgroundColor: '#01b4e4'},
                 headerTintColor: '#E0E6ED',
  }}
  >
        <Stack.Screen
        options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen 
        name="Browse" 
        component={BrowseScreen}
        options={{ title: 'Movies', }}// Specify the height of your custom header}}
         />
        <Stack.Screen  
        name="Details" 
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
         />
        <Stack.Screen 
        name="Player" 
        component={PlayerScreen}
        options={({ route }) => ({ 
          title: `Trailer: ${route.params.title}`
        })}
         />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


