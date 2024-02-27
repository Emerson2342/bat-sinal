import { StyleSheet, StatusBar, View } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
      />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center"

  },
});
