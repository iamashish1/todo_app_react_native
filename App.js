import { SafeAreaView, StyleSheet, } from 'react-native';
import TodoScreen from './src/pages/TodoScreen'
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <TodoScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
