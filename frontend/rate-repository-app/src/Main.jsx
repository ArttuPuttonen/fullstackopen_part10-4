import { Text, StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './components/RepositoryList';
import AppBar from './components/AppBar';
import SignIn from './components/SignIn';
import SingleRepository from './components/SingleRepository'; 
import ReviewForm from './components/ReviewForm';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/create-review" element={<ReviewForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/repository/:id" element={<SingleRepository />} /> {/* Add the new route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
