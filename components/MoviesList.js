import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,  ActivityIndicator, FlatList } from 'react-native';

import { URL } from '../api/constants';
import axios from 'axios';
import MovieCard from './MovieCard';

//  ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 const MoviesList =  ({navigation, category, categoryTitle, id}) => {
   console.log(category)

  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1)

  const getMovies = async () => {
    try {
      console.log((`${URL}${category}${page}`));
     const response = await axios.get(`${URL}${category}${page}`);
     const results = response.data.results;
    //  setMovies(results);
    console.log(movies? true: false)
    if (movies) {
      setMovies([...movies, ...results]);
    } else {
      setMovies(results);
    }
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
 }, [page, id]);

// console.log(id);
// console.log(movies)
  return (
    <View style={{ flex: 1}}>
      {/* <ActivityIndicator size="large" color="#0000ff"/> */}
      {/* {error && <Text>OOOOOps, Something went wrong</Text>} */}
      <Text style={styles.categoryTitle}>{categoryTitle}</Text>
    {isLoading ? <ActivityIndicator  size="large" color="#0000ff"/> : (
      <FlatList
      horizontal={true}
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => {
          setPage(page + 1);
        }}
        renderItem={({ item}) => (
          <View>
            <MovieCard
            title={item.title}
            imgUrl={item.poster_path}
            onPress={() =>
        navigation.navigate('Details', {title: item.title, imgUrl:item.poster_path, overview:item.overview, id:item.id, date:item.release_date })
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

  categoryTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  paddingBottom: 10,
  // marginBottom:5,
  marginLeft:4,
  color: '#0d253f'


  }
  
});


export default MoviesList;
