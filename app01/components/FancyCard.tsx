import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.head}>FancyCard</Text>
      <View style={styles.cardcontainer}>
      <View style={styles.card}>
      <View style={styles.cardimg}>
        <Image style={styles.image}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
        />
      </View>
      <View style={styles.cardcontent}>
        <Text style={styles.title}>JAIPUR</Text>
        <Text style={styles.text}>Hello from jaipur </Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, asperiores. Minima iure assumenda exercitationem quas maiores nisi possimus asperiores quasi. </Text>

      </View>
      </View>
      </View>
     
    </View>
  )
}

export default FancyCard

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