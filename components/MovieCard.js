import React from 'react'
import {Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { IMAGE_URL } from '../api/constants';

const MovieCard = ({title, imgUrl, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
       <Text>{title}</Text>
       <Image 
       style={styles.image}
       source={{
        uri: `${IMAGE_URL}${imgUrl}`,
      }}
       />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
width: 92,
height:92

  }
})

export default MovieCard
