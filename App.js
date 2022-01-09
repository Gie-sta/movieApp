import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import BrowseScreen from './screens/BrowseScreen';
import DetailsScreen from './screens/DetailsScreen';
import PlayerScreen from './screens/PlayerScreen';


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, SafeAreaView, Image, requireNativeComponent } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  // https://api.themoviedb.org/3/movie/popular?api_key=41e8f097f3d833768dc737f3c45e92a1&language=en-US&page=1
  
  console.log('lounched');
  return (
    <NavigationContainer>
            <Stack.Navigator 
             screenOptions={{
    // headerShown: true,
    headerStyle: { backgroundColor: '#01b4e4', height: 20 },
  }}
  >
        <Stack.Screen
        options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
          // options={{ title: 'Welcome' }}
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


