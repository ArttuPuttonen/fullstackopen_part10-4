import React from 'react';
import { FlatList, View, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigate } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  pickerContainer: {
    padding: 10,
  },
});

export const RepositoryListContainer = ({
  repositories,
  selectedOrder,
  setSelectedOrder,
}) => {
  const navigate = useNavigate();

  const ItemSeparator = () => <View style={styles.separator} />;

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
      <RepositoryItem item={item} />
    </Pressable>
  );

  const repositoryNodes = repositories.edges
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={styles.pickerContainer}>
          <Text>Select sorting order:</Text>
          <Picker
            selectedValue={selectedOrder}
            onValueChange={(itemValue) => setSelectedOrder(itemValue)}
          >
            <Picker.Item label="Latest repositories" value="latest" />
            <Picker.Item label="Highest rated repositories" value="highest" />
            <Picker.Item label="Lowest rated repositories" value="lowest" />
          </Picker>
        </View>
      }
    />
  );
};
