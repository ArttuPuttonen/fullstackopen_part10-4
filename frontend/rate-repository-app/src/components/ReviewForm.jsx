import React from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

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
  ownerName: Yup.string().required('Repository owner name is required'),
  repositoryName: Yup.string().required('Repository name is required'),
  rating: Yup.number()
    .required('Rating is required')
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100'),
  text: Yup.string(),
});

const ReviewForm = () => {
  const navigate = useNavigate();
  const [createReview] = useMutation(CREATE_REVIEW);

  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
  };

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const { data } = await createReview({
        variables: {
          review: {
            ownerName,
            repositoryName,
            rating: parseInt(rating),
            text,
          },
        },
      });

      const repositoryId = data.createReview.repositoryId;
      navigate(`/repository/${repositoryId}`);
    } catch (e) {
      console.log('Error submitting review', e);
    }
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
            style={[styles.input, touched.ownerName && errors.ownerName && styles.inputError]}
            placeholder="Repository owner name"
            onChangeText={handleChange('ownerName')}
            onBlur={handleBlur('ownerName')}
            value={values.ownerName}
          />
          {touched.ownerName && errors.ownerName && (
            <Text style={styles.errorText}>{errors.ownerName}</Text>
          )}
          <TextInput
            style={[styles.input, touched.repositoryName && errors.repositoryName && styles.inputError]}
            placeholder="Repository name"
            onChangeText={handleChange('repositoryName')}
            onBlur={handleBlur('repositoryName')}
            value={values.repositoryName}
          />
          {touched.repositoryName && errors.repositoryName && (
            <Text style={styles.errorText}>{errors.repositoryName}</Text>
          )}
          <TextInput
            style={[styles.input, touched.rating && errors.rating && styles.inputError]}
            placeholder="Rating between 0 and 100"
            onChangeText={handleChange('rating')}
            onBlur={handleBlur('rating')}
            value={values.rating}
            keyboardType="numeric"
          />
          {touched.rating && errors.rating && (
            <Text style={styles.errorText}>{errors.rating}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Review"
            onChangeText={handleChange('text')}
            onBlur={handleBlur('text')}
            value={values.text}
            multiline
          />
          <Button title="Create a review" onPress={handleSubmit} style={styles.button} />
        </View>
      )}
    </Formik>
  );
};

export default ReviewForm;
