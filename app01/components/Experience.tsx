import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Experience = () => {
    const experience = [
        {
          company: "Upskill Mafia",
          position: "Campus Senior Intern",
          skills: ["Web Development", "Team Lead", "Communication", "Project Management"],
          description: "Organized web development workshops, guided participants in creating web pages, and provided resources for continuous learning.",
          duration: "March 2024 - August 2024",
        },
        {
          company: "XenonStack",
          position: "Associate Software Engineer Trainee",
          skills: ["GIT", "PostgreSQL", "GoLang", "SQL", "DevOps", "Linux"],
          description: "Learned cloud computing and DevOps basics, implemented Git/GitHub for version control, and developed a task management API using Golang.",
          duration: "July 2023 - September 2023",
        },
        {
          company: "Unicompiler",
          position: "Web Development and Designing Intern",
          skills: ["HTML", "CSS", "JavaScript"],
          description: "Built three projects, improving front-end web development skills.",
          duration: "July 2022 - August 2022",
        },
      ];

  return (
    <View style={styles.experienceContainer}>
      <Text style={styles.heading}>Experiences</Text>
      <View>
        <View style={styles.tablerow}>
            <Text style={styles.headercell}>Company</Text>
            <Text style={styles.headercell}>Duration</Text>
        </View>
      </View>
      <View>
        {
            experience.map(({company,position,skills,description,duration})=>(
                <View style={styles.tablerow} key={company}>
                <View style={styles.textcell}>
                <Text >{company}</Text>
                <Text style={styles.description}>{position}</Text>
                </View>
                <Text style={styles.textcell}>{duration}</Text>
            </View>
            ))
        } 
      </View>
    </View>
  )
}

export default Experience

const styles = StyleSheet.create({
    heading:{
        marginBottom:10,
        fontSize:16
    },
    experienceContainer:{
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
        width:135,
        padding:4
    },
    textcell:{
        width:135,
        padding:4
    },
    description:{
        fontSize:10,
        color:"lightgrey"
    }
})