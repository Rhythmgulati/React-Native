import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required')
});

export default function Contact() {

    const [issubmitted,setissubmitted]=useState(false);

  return (
    <View style={styles.contactContainer}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: ''
        }}
        validationSchema={ContactSchema}
        onSubmit={(values,{resetForm}) => {
          console.log(values);
          setissubmitted(true);
          resetForm();
        }}
      >
        {
        ({ 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        values, 
        errors, 
        touched,
        handleReset
        }) => (
          <View>

            <Text style={styles.contacthead}>Contact Me</Text>
            {/* First Name Field */}
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName ? (
              <Text style={styles.errorText}>{errors.firstName}</Text>
            ) : null}

            {/* Last Name Field */}
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName ? (
              <Text style={styles.errorText}>{errors.lastName}</Text>
            ) : null}

            {/* Email Field */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}


            <View style={styles.submitrow}>
            <TouchableOpacity onPress={handleSubmit}>
            <Text>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReset}>
            <Text>Reset</Text>
            </TouchableOpacity>
            </View>
            

            {issubmitted?(<Text style={styles.submittedtext}>Submitted</Text>):null}
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    padding: 20,
    width:'80%',
    margin:'auto'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 5
  },
  submitrow:{
    flex:1,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"center",
    gap:20,
    margin:4
  },
  contacthead:{
    textAlign:"center",
    padding:10,
    borderTopColor:"grey",
    borderTopWidth:1
  },
  submittedtext:{
    textAlign:"center",
    margin:10,
    backgroundColor:"green",
    padding:4,
    borderRadius:100
  }
});
