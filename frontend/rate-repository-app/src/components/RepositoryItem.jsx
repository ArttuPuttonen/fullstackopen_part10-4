import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 5,
      marginRight: 10,
    },
    info: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    language: {
      padding: 5,
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      borderRadius: 5,
      alignSelf: 'flex-start',
      marginTop: 5,
    },
    stats: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
    },
    statItem: {
      alignItems: 'center',
    },
    statText: {
      fontWeight: theme.fontWeights.bold,
    },
  });
  
  const formatCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k';
    }
    return count.toString();
  };
  
  const RepositoryItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.info}>
          <Text style={{ fontWeight: theme.fontWeights.bold, fontSize: theme.fontSizes.subheading }}>
            {item.fullName}
          </Text>
          <Text color="textSecondary">{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statText}>{formatCount(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statText}>{formatCount(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statText}>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statText}>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
  
  export default RepositoryItem;
  