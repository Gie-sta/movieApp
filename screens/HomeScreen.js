import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground} from 'react-native';

import Button from '../components/Button';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      
      <View style={styles.contentContainer}>
    <Text style={styles.header}>ReactSeals presents</Text>
    <View style={styles.buttonsContainer}>
      <Button 
     
      text='Browse'
      onPress={() =>
        navigation.navigate('Browse')
      }
      />
      <Button 
     
        text='Login'
        />
      
    </View>
    <Text style={styles.bottomText}>ReactSeals internship program assigment app</Text>
      </View>
    <StatusBar style="auto" />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding:10
  },
  contentContainer:{
    justifyContent: 'space-between',
height:'50%',
top:-10
  },
  header:{
    fontSize:25,
    textAlign:'center'
  },
  buttonsContainer:{
    paddingBottom:50,
    marginLeft: 'auto',
    marginRight:'auto',
  },
  


  
});

export default HomeScreen
