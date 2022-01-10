import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native';


const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity
    style={styles.button}
         onPress={onPress}
         >
      <Text  style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#E0E6ED',
    width: 200,

  },
  text: {
    paddingTop:5,
    paddingBottom:5,
    color: '#0d253f',
    fontWeight:'bold'    
  }
})

export default Button
