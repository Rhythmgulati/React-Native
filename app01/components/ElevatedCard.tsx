import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text>ElevatedCard</Text>
    <ScrollView horizontal style={styles.container}>
    <View style={styles.card}><Text>Red</Text></View>
    <View style={styles.card}><Text>Red</Text></View>
    <View style={styles.card}><Text>Red</Text></View>
    <View style={styles.card}><Text>Red</Text></View>
   
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
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        padding:20
    },
    card:{
        backgroundColor:"red",
        paddingHorizontal:10,
        paddingVertical:10,
        height:100,
        width:100,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
})