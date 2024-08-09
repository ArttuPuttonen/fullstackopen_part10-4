import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e4e8',
  },
  ratingContainer: {
    width: 40,
    height: 40,
    borderRadius: 20, // Make the container round
    borderWidth: 2,
    borderColor: '#0366d6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  ratingText: {
    color: '#0366d6',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#586069',
    marginBottom: 5,
  },
  reviewText: {
    marginTop: 5,
  },
});

const ReviewItem = ({ review }) => {
  const { rating, text, user, createdAt } = review;
  const formattedDate = format(new Date(createdAt), 'dd.MM.yyyy');

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
        <Text style={styles.reviewText}>{text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
