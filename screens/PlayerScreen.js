import React from 'react'
import { View, Text } from 'react-native';
import VideoPlay from '../components/VideoPlay';

const PlayerScreen = (props) => {
  
  const movie = props.route.params;
  return (
  
    <View>
      <Text>{movie.title}</Text>
      <VideoPlay
      id={movie.id}
      navigation={props.navigation}/>
    </View>
  )
}

export default PlayerScreen

