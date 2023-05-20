import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, StatusBar as SB } from "react-native";
import { store } from "./store/store";
import { Provider } from "react-redux";
import CryptoPriceList from "./components/CryptoPriceList";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Provider store={store}>
        <CryptoPriceList />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c5cad",
    paddingTop: SB.currentHeight, // adjust the safeareaview for android
  },
});
