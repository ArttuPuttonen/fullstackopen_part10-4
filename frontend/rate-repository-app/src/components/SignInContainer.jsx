import React from 'react';
import { View, Button, TextInput, StyleSheet, Text as NativeText } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={[styles.input, touched.username && errors.username && styles.inputError]}
            placeholder="Username"
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            testID="usernameInput"
          />
          {touched.username && errors.username && (
            <NativeText style={styles.errorText}>{errors.username}</NativeText>
          )}
          <TextInput
            style={[styles.input, touched.password && errors.password && styles.inputError]}
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            testID="passwordInput"
          />
          {touched.password && errors.password && (
            <NativeText style={styles.errorText}>{errors.password}</NativeText>
          )}
          <Button title="Sign In" onPress={handleSubmit} testID="submitButton" />
        </View>
      )}
    </Formik>
  );
};

export default SignInContainer;
