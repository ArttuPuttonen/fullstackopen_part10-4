import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import format from 'date-fns/format';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'blue',
    borderWidth: 2,
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  info: {
    flexShrink: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  createdAt: {
    color: 'grey',
    marginBottom: 5,
  },
  text: {
    marginTop: 5,
  },
});

const ReviewItem = ({ review }) => {
  console.log(review);

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{review.rating}</Text>
        <View style={styles.info}>
          <Text style={styles.username}>
            {review.user ? review.user.username : 'Anonymous'}
          </Text>
          <Text style={styles.createdAt}>
            {format(new Date(review.createdAt), 'dd.MM.yyyy')}
          </Text>
        </View>
      </View>
      <Text style={styles.text}>{review.text}</Text>
    </View>
  );
};

export default ReviewItem;
