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
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight:'auto',
    backgroundColor: '#ffffff',
    width: '60%',
    borderTopColor:'#e0e0e0',
    borderTopWidth:1

  },
  text: {
    paddingTop:5,
    paddingBottom:5,
    color: '#2196F3'
  }
})

export default Button