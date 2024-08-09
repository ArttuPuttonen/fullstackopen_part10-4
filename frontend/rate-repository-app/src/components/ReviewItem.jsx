import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useNavigate } from 'react-router-native';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  rating: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#0366d6',
    color: '#0366d6',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    paddingLeft: 15,
  },
  username: {
    fontWeight: 'bold',
  },
  createdAt: {
    color: '#586069',
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    margin: 5,
  },
});

const ReviewItem = ({ review, deleteReview }) => {
  const navigate = useNavigate();

  const handleViewRepository = () => {
    navigate(`/repository/${review.repositoryId}`);
  };

  const handleDeleteReview = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: deleteReview,
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.rating}>{review.rating}</Text>
        <View style={styles.info}>
          <Text style={styles.username}>{review.user.username}</Text>
          <Text style={styles.createdAt}>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="View repository" onPress={handleViewRepository} color="#0366d6" />
        </View>
        <View style={styles.button}>
          <Button title="Delete review" onPress={handleDeleteReview} color="#d73a4a" />
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
