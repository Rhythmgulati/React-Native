import { Image, StyleSheet, Text, View , Linking , TouchableOpacity } from 'react-native'
import React from 'react'

const LinkCard = () => {

  function gotowebsite(sitename:string){
    Linking.openURL(sitename)
  }
  return (
    <View>
      <Text style={styles.head}>Link Card</Text>
      <View style={styles.cardcontainer}>
      <View style={styles.card}>
      <View style={styles.cardimg}>
        <Image style={styles.image}
        source={{
          uri: 'https://images.freeimages.com/image/previews/637/spanish-cuisine-illustration-pack-5696659.jpg?fmt=webp&w=500',
        }}
        />
      </View>
      <View style={styles.cardcontent}>
        <Text style={styles.title}>JAIPUR</Text>
        <Text style={styles.text}>Hello from jaipur </Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, asperiores. Minima iure assumenda exercitationem quas maiores nisi possimus asperiores quasi. </Text>
        <TouchableOpacity onPress={()=>gotowebsite("https://reactnative.dev/docs/linking#openurl")}>
        <Text>READ MORE</Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
    </View>
  )
}

export default LinkCard

const styles = StyleSheet.create({
    cardcontainer:{
        padding:8
      },
      card:{
          height:400,
          width:360,
          display:'flex',
          margin:'auto',
          // alignItems:'center',
          // justifyContent:'center',
          borderRadius:2,
          elevation:3
      },
      head:{
          textAlign:'center',
          fontSize:20,
          marginTop:15,
      },
      cardimg:{
          height:200,
          width:360,
          // elevation:3
          
      },
      image:{
          height:200,
          width:360,
      },
      cardcontent:{
          padding:10
      },
      title:{
          fontSize:30,
      },
      text:{
          fontSize:15,
          // color:"white"
      }
})