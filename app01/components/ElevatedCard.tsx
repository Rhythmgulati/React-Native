import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.head }>ElevatedCard</Text>
    <ScrollView horizontal style={styles.container}>
    <View style={[styles.card]}><Text>Red</Text></View>
    <View style={[styles.card,styles.cardone]}><Text>Red</Text></View>
    <View style={[styles.card,styles.cardtwo]}><Text>Red</Text></View>
    <View style={[styles.card]}><Text>Red</Text></View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    head:{
        textAlign:'center',
        fontSize:20,
        marginTop:15
    },
    container:{
        padding:20
    },
    card:{
        backgroundColor:"red",
        margin:8,
        height:100,
        width:100,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        elevation:10
    },
    cardone:{
      backgroundColor:"white"
    },
    cardtwo:{
      backgroundColor:"yellow"
    }
})