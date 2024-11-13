import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Education = () => {

    const educations=[
        {
          institution: "COER University",
          qualification: "Bachelor's of Computer Applications",
          aggregate: "86.2%",
          duration: "2021 - 2024",
        },
        {
          institution: "Skyward Senior Secondary School",
          qualification: "CBSE (Class XII)",
          aggregate: "91.2%",
          duration: "2020 - 2021",
        },
        {
          institution: "Army Public School No.2 Roorkee",
          qualification: "CBSE (Class X)",
          aggregate: "81.2%",
          duration: "2018 - 2019",
        },
      ];

  return (
    <View style={styles.educationContainer}>
      <Text style={styles.heading}>Education</Text>
      <View>
        <View style={styles.tablerow}>
            <Text style={styles.headercell}>Institute</Text>
            <Text style={styles.headercell}>Qualification</Text>
            <Text style={styles.headercell}>Percentage</Text>
        </View>
      </View>
      <View>
        {
        educations.map(({institution,qualification,aggregate,duration})=>(
            <View style={styles.tablerow} key={institution}>
            <Text style={styles.textcell}>{institution}</Text>
            <Text style={styles.textcell}>{qualification}</Text>
            <Text style={styles.textcell}>{aggregate}</Text>
        </View>
        ))
        }
       
      </View>
    </View>
  )
}

export default Education

const styles = StyleSheet.create({
    heading:{
        marginBottom:10,
        fontSize:16
    },
    educationContainer:{
        padding:10,
        width:"90%",
        margin:'auto'
    },
    tablerow:{
        flex:1,
        flexDirection:'row',
        padding:10,
        borderBottomColor:"grey",
        borderBottomWidth:1
    },
    headercell:{
        width:95,
        padding:4
    },
    textcell:{
        width:95,
        padding:4
    }
})