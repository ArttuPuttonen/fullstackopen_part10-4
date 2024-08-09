import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();

  const ItemSeparator = () => <View style={styles.separator} />;

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
      <RepositoryItem item={item} />
    </Pressable>
  );

  const repositoryNodes = repositories.edges
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
