import React from 'react';
// !!!!!!!!!!!!!!!!!
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList} from 'react-native';

import { fetch } from '../api/requests';
// import { fetchPopular } from '../api/requests';
// import { fetchUpcoming } from '../api/requests';
// import { fetchTopRated } from '../api/requests';
import MoviesList from '../components/MoviesList';


const BrowseScreen = ({navigation}) => {


  return (
    <View style={styles.container}>
      <FlatList
        data={fetch}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <MoviesList
            
            navigation={navigation} 
            category={item.url} 
            categoryTitle={item.categoryTitle}
            />
        </View>
        )}
      />
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
  listContainer:{
    height: '30%',
    margin: 10
  }

});





export default BrowseScreen;
