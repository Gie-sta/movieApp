import React from 'react'
import {StyleSheet, Image, Text, View } from 'react-native';

import { IMAGE_URL } from '../api/constants';
import Button from '../components/Button';
import MoviesList from '../components/MoviesList';
import { fethchSimilar } from '../api/requests';


const DetailsScreen = (props) => {
  const movie = props.route.params;
  
  // console.log(movie)
  return (
    <View style={{flex:1}}>
      <View style={{flex:2}}>
        <Text> {movie.title}</Text>
        <Text> {movie.date}</Text>
        <Image
        style={styles.image}
        source={{
          uri: `${IMAGE_URL}${movie.imgUrl}`,
        }}/>
        <Text>{movie.overview}</Text>

      </View>
        <View style={{flex:1}}>
        <Button
        text='Play Movie'
        onPress={() =>
          props.navigation.navigate('Player', {title: movie.title, id:movie.id}
          )
              }
        />
        <Button
        text='Add To Library'/>

      </View>
      <View style={{flex:1}}>
        <MoviesList id={movie.id}
        navigation={props.navigation}
        categoryTitle={'Recomended Similar Movies'}
        category={fethchSimilar(movie.id)}/>
      </View>
    
    </View>
   
   
  )
}

const styles = StyleSheet.create({
  image: {
width: 92,
height:92

  }
})

export default DetailsScreen
