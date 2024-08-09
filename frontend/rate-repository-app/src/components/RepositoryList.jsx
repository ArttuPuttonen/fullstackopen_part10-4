import React, { useState } from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
import { useDebounce } from 'use-debounce';
import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';
import { useNavigate } from 'react-router-native';

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState('latest');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);
  
  const orderBy = selectedOrder === 'highest' ? 'RATING_AVERAGE' : 'CREATED_AT';
  const orderDirection = selectedOrder === 'lowest' ? 'ASC' : 'DESC';
  
  const { repositories, loading, error } = useRepositories({ 
    orderBy, 
    orderDirection, 
    searchKeyword: debouncedSearchKeyword 
  });

  const navigate = useNavigate();

  const navigateToRepository = (id) => {
    navigate(`/repository/${id}`);
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      navigateToRepository={navigateToRepository}
    />
  );
};

export default RepositoryList;
