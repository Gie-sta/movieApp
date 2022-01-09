import React from 'react'
import {StyleSheet, Image, Text, View, ScrollView, Dimensions } from 'react-native';

import { IMAGE_URL } from '../api/constants';
import Button from '../components/Button';
import MoviesList from '../components/MoviesList';
import { fethchRecomended } from '../api/requests';


const DetailsScreen = (props) => {
  const movie = props.route.params;
  console.log(movie)
  
  // console.log(movie)
  return (
    <ScrollView style={styles.scrollContainer}>
      <View >
        <Image
        style={styles.image}
        source={{
          uri: `${IMAGE_URL}${movie.imgUrl}`,
        }}/>
        <Text style={styles.details}>Movie Details</Text>
        <Text><Text style={styles.titleName}> Title: </Text>{movie.title}</Text>
        <Text><Text style={styles.titleName}> Release date: </Text>{movie.date}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>

      </View>
      <View style={styles.btnContiner}>
        <Button
            text='Play Movie'
            onPress={() =>
            props.navigation.navigate('Player', {title: movie.title, id:movie.id}
            )}
          />
        <Button
            text='Add To Library'/>
      </View>
      <View >
        <MoviesList 
        id={movie.id}
        navigation={props.navigation}
        categoryTitle={'Recomended Similar Movies'}
        category={fethchRecomended(movie.id)}/>
      </View>
    
    </ScrollView>
   
   
  )
}
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scrollContainer:{
    padding: 15
    },
  image: {
    width: (deviceWidth * 95) / 100,
    height: (deviceHeight * 40) / 100,
    marginBottom: 10,
    resizeMode: 'contain'
  },
  details:{
    fontWeight: 'bold',
    fontSize:25,

  },
  titleName: {
    fontWeight: 'bold',
    // marginLeft:-4,
  },
  overview:{
    textAlign: 'justify',
    marginLeft:4,
    marginRight:4,
    marginBottom: 20
  },
  btnContiner:{
    marginBottom: 20,
    marginLeft:4
  }
})

export default DetailsScreen
