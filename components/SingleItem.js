import { View, Text, StyleSheet, Image } from "react-native";

function SingleItem({ item }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.image.split("?")[0] ? item.image : <Text>No Image</Text>,
          }}
        />
        <Text style={styles.symbol}>{item.symbol.toUpperCase()}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>Price: ${item.current_price.toFixed(5)}</Text>
        <Text style={styles.text}>Volume: {item.total_volume}</Text>
        <Text style={styles.text}>
          PriceChange: ${item.price_change_24h.toFixed(5)}
        </Text>
        <Text style={styles.text}>
          Last Updated: {item.last_updated.split("T")[0]}
        </Text>
      </View>
    </View>
  );
}

export default SingleItem;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#c5cfd8",
    marginBottom: 10,
    marginHorizontal: 10,
    height: 150,
    borderRadius: 20,
  },
  imageContainer: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  description: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  symbol: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
  },
  text: {
    paddingBottom: 5,
    fontSize: 16,
  },
});
