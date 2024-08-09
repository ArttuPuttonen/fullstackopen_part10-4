import { Text, StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './components/RepositoryList';
import AppBar from './components/AppBar';
import SignIn from './components/SignIn';
import SingleRepository from './components/SingleRepository'; 
import ReviewForm from './components/ReviewForm';
import MyReviews from './components/MyReviews';
import SignUp from './components/SignUp'; 

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
        <Route path="/signup" element={<SignUp />} /> {/* Add signup route */}
        <Route path="/repository/:id" element={<SingleRepository />} />
        <Route path="/my-reviews" element={<MyReviews />} /> {/* Add my-reviews route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
