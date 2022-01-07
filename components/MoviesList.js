import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,  ActivityIndicator, FlatList } from 'react-native';

import { URL } from '../api/constants';
import axios from 'axios';
import MovieCard from './MovieCard';

 
 const MoviesList =  ({navigation, category, categoryTitle}) => {

  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const getMovies = async () => {
    try {
     const response = await axios.get(`${URL}${category}`);
     setMovies(response.data.results);
          setError(false);
   } catch (error) {
     console.error(error)
     setError(true);
    
   } finally {
     setLoading(false);
   }
 }

 
 useEffect(() => {
   getMovies();
 }, []);


  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text>{categoryTitle}</Text>
      {error && <Text>OOOOOps, Something went wrong</Text>}
    {isLoading ? <ActivityIndicator/> : (
      <FlatList
      horizontal={true}
        data={movies}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <View>
            <MovieCard
            title={item.title}
            imgUrl={item.backdrop_path}
            onPress={() =>
        navigation.navigate('Details', {title: item.title, imgUrl:item.backdrop_path, overview:item.overview, id:item.id, date:item.release_date })
            }
            />
        </View>
        )}
      />
    )}
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
  logo: {
    width:50,
    height:50,
    resizeMode: 'contain',
    borderWidth: 5,
    borderColor: '#fff',
  }
});


export default MoviesList;
