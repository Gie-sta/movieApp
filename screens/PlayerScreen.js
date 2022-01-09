import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import VideoPlay from '../components/VideoPlay';

const PlayerScreen = (props) => {
  
  const movie = props.route.params;
  return (
  
    <View  style={styles.container}>
      {/* <Text>{movie.title}</Text> */}
      <VideoPlay
      style={styles.video}
     
      id={movie.id}
      navigation={props.navigation}/>
    </View>
  )
}

export default PlayerScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    width:'100%',
    marginTop: 200
  },
video: {
  width: '100%'
}
})
