import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useQuery, useMutation } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';
import { DELETE_REVIEW } from '../graphql/mutations';
import ReviewItem from './ReviewItem';

const MyReviews = () => {
  const { data, loading, refetch } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
  });

  const [deleteReview] = useMutation(DELETE_REVIEW);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const handleDeleteReview = async (id) => {
    try {
      await deleteReview({ variables: { id } });
      refetch();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const reviews = data?.me?.reviews?.edges?.map(edge => edge.node);

  return (
    <FlatList
      data={reviews}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <ReviewItem review={item} deleteReview={() => handleDeleteReview(item.id)} />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
};

export default MyReviews;
