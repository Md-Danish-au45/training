import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import Card from "../components/Card";
import colors from "../config/colors";
const listings = [
  {
    id: 1,
    title: "Training",
    subTitle: 100,
    image: require("../../assets/back.jpg"),
  },
  {
    id: 2,
    title: "Training Mrdium",
    subTitle: 1000,
    image: require("../../assets/back.jpg"),
  },
];
const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.subTitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
