import React from 'react';
import { Text } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!repositories) {
    return <Text>No repositories found.</Text>;
  }

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
