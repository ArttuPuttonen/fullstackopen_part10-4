import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { Linking } from 'react-native';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    marginTop: 10,
  },
});

const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const repository = data.repository;

  const handleOpenInGitHub = () => {
    Linking.openURL(repository.url);
  };

  return (
    <View style={styles.container}>
      <RepositoryItem item={repository} />
      <Button title="Open in GitHub" onPress={handleOpenInGitHub} style={styles.button} />
    </View>
  );
};

export default SingleRepository;
