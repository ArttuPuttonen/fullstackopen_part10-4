import React, { useState } from 'react';
import { Text } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState('latest');

  const orderBy = selectedOrder === 'highest' ? 'RATING_AVERAGE' : 'CREATED_AT';
  const orderDirection = selectedOrder === 'lowest' ? 'ASC' : 'DESC';

  const { repositories, loading, error } = useRepositories({ orderBy, orderDirection });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
    />
  );
};

export default RepositoryList;
