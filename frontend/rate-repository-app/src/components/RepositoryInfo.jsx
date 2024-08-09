import React from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    padding: 10,
  },
});

const RepositoryInfo = ({ repository }) => {
  const openGitHub = () => {
    Linking.openURL(repository.url);
  };

  return (
    <View style={styles.container}>
      <RepositoryItem item={repository} />
      <Button title="Open in GitHub" onPress={openGitHub} style={styles.button} />
    </View>
  );
};

export default RepositoryInfo;
