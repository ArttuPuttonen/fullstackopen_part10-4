import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    tab: {
        paddingHorizontal: 10,
    },
    });

const AppBarTab = ({ title }) => {
  return (
    <View >
      <Text style={styles.tab} color="white" fontWeight="bold" fontSize="subheading">
        {title}
      </Text>
    </View>
  );
};

export default AppBarTab;
