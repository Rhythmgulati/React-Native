import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as Yup from 'yup';

const LengthSchema = Yup.object().shape({
  length: Yup.number()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const App = () => {
  let [charAllowed, setCharAllowed] = useState(false);
  let [digitsAllowed, setdigitsAllowed] = useState(false);
  let [isPassGenerated, setIsPawwordGenerated] = useState(false);
  let [password, setPassword] = useState('');

  const generateString = (length: number) => {
    // console.log(length);
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    characterList += upperCaseChars;
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (charAllowed) {
      characterList += specialChars;
    }
    if (digitsAllowed) {
      characterList += digitChars;
    }

    generatePassword(length, characterList);
  };

  const generatePassword = (length: number, characterList: string) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * characterList.length);
      result += characterList.charAt(idx);
    }

    setPassword(result);
    setIsPawwordGenerated(true);
  };

  const handleResetState = () => {
    setCharAllowed(false);
    setIsPawwordGenerated(false);
    setdigitsAllowed(false);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          marginTop: 40,
          fontSize: 20,
        }}
      >
        Password Generator
      </Text>

      <Formik
        initialValues={{ length: '5' }}
        onSubmit={values => generateString(+values.length)}
        validationSchema={LengthSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          values,
          errors,
          touched,
        }) => (
          <View style={{ width: '80%' }}>
            <TextInput
              onChangeText={handleChange('length')}
              onBlur={handleBlur('length')}
              value={values.length}
              placeholder="Enter your length"
              keyboardType="numeric"
              placeholderTextColor="#999"
              style={{
                width: '100%',
                borderWidth: 1,
                borderRadius: 2,
                borderColor: 'grey',
                marginVertical: 40,
              }}
            />
            {errors.length && touched.length && (
              <Text style={{ color: 'red' }}>{errors.length}</Text>
            )}
            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include lowercase</Text>
              <View style={{ width: 40, alignItems: 'flex-end' }}>
                <BouncyCheckbox
                  isChecked={charAllowed}
                  onPress={() => setCharAllowed(!charAllowed)}
                  fillColor="#29AB87"
                  disableText
                />
              </View>
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Alphabaets</Text>
              <View style={{ width: 40, alignItems: 'flex-end' }}>
                <BouncyCheckbox
                  isChecked={digitsAllowed}
                  onPress={() => setdigitsAllowed(!digitsAllowed)}
                  fillColor="#29AB87"
                  disableText
                />
              </View>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}
              >
                <Text>Get Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleReset();
                  handleResetState();
                }}
              >
                <Text>Reset</Text>
              </TouchableOpacity>
            </View>
            {isPassGenerated ? (
              <View>
                <Text>Result:</Text>
                <Text>Long Press to copy</Text>
                <Text selectable={true} style={{ fontSize: 40, color: '#000' }}>
                  {password}
                </Text>
              </View>
            ) : null}
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    // color: '#000',
  },
  inputWrapper: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flex: 1,
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 40,
  },
});
