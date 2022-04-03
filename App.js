import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {
  NativeRouter as Router,
  Routes,
  Route
} from "react-router-native";
import Header from "./Components/Header/Header";
import GoalForm from "./Components/GoalForm/GoalForm";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
          
          <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Text>Some home test</Text>} />
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
