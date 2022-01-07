import React from 'react';
// !!!!!!!!!!!!!!!!!
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';


import { fetchPopular } from '../api/requests';
import { fetchUpcoming } from '../api/requests';
import { fetchTopRated } from '../api/requests';
import MoviesList from '../components/MoviesList';


const BrowseScreen = ({navigation}) => {


  return (
    <View style={styles.container}>
      <MoviesList navigation={navigation} category={fetchPopular} categoryTitle={'Popular Movies'}/>
      <MoviesList navigation={navigation} category={fetchTopRated} categoryTitle={'Top rated Movies'}/>
      <MoviesList navigation={navigation} category={fetchUpcoming} categoryTitle={'Upcoming movies'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },

});





export default BrowseScreen;
