import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {
  NativeRouter as Router,
  Routes,
  Route
} from "react-router-native";
import Header from "./Components/Header/Header";
import GoalForm from "./Components/GoalForm/GoalForm";
import axios from "axios";
import AuthContainer from "./Components/Auth/AuthContainer";

export default function App() {
  axios.defaults.baseURL = process.env.REACT_APP_DDAPI_DOMAIN;

  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.container}>

          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<AuthContainer action="login" />} />
              <Route path="user/login" element={<AuthContainer action='login' />} />
              <Route path="user/register" element={<AuthContainer action='register' />} />
              <Route path="user/recover" element={<AuthContainer action='recover' />} />
              <Route path="user/reset" element={<AuthContainer action='reset' />} />
              <Route path="new-goal" element={<GoalForm />} />
            </Routes>
            <StatusBar style="auto" />
          </Router>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
  