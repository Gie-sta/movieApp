import React from 'react'
import {Text, TouchableOpacity, Image, StyleSheet,ActivityIndicator,Dimensions } from 'react-native';

import { IMAGE_URL } from '../api/constants';

const MovieCard = ({title, imgUrl, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
       <Image 
       style={styles.image}
       source={{
         uri: `${IMAGE_URL}${imgUrl}`,
        }}
       />
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

// const deviceWidth = Dimensions.get("window").width;
// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  card:{
width:144
  },
  title: {
    marginLeft: 4,
    width: 144,
    paddingBottom: 5,
    // top:-5
    // height:35
  },
  image: {
// width: 144,
height:204,
// marginRight:2,
// width: (deviceWidth * 48) / 100,
// height: (deviceHeight * 40) / 100,
resizeMode:'contain'

  }
})

export default MovieCard
