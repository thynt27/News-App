import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Style = () => {
  return (
    <View>
      <Text style={styles.text1}>Style</Text>
      <Text style={[styles.text1, styles.text2]}>Style2</Text>
    </View>
  )
}

export default Style

const styles = StyleSheet.create({
    text1: {
        fontSize: 30,
        color: 'blue',
        textAlign: 'center'
    },

    text2: {
        fontSize: 50,
        color: 'green',
        backgroundColor: 'purple'
    },

    text3: {
        backgroundColor: 'red'
    }
    
})