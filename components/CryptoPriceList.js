import { useEffect } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getCryptocurrency } from "../store/cryptoSlice";
import SingleItem from "./SingleItem";

function CryptoPriceList() {
  const dispatch = useDispatch();
  const { cryptocurrency, loading, error } = useSelector(
    (state) => state.crypto
  );

  useEffect(() => {
    dispatch(getCryptocurrency());
  }, []);

  function handleReload() {
    dispatch(getCryptocurrency());
  }
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Top 100 Cryptocurrencies Details</Text>
      </View>
      {loading === true ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
          <Button title="Reload" onPress={handleReload} />
        </View>
      ) : (
        <FlatList
          data={cryptocurrency}
          renderItem={({ item }) => <SingleItem item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ backgroundColor: "#ffffff", paddingTop: 8 }}
        />
      )}
    </>
  );
}
export default CryptoPriceList;

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 5,
    textAlign: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  error: {
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
