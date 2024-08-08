import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';
import AppBarTab from './AppBarTab';
import theme from './theme';
import { GET_ME } from '../graphql/queries';
import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const { data } = useQuery(GET_ME);
  const signOut = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollContainer}>
        <Link to="/" component={View}>
          <AppBarTab title="Repositories" />
        </Link>
        {data?.me ? (
          <Link to="/" component={View} onPress={signOut}>
            <AppBarTab title="Sign Out" />
          </Link>
        ) : (
          <Link to="/signin" component={View}>
            <AppBarTab title="Sign In" />
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
