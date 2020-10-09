import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
  const rating = route.params?.rating;
  // const { rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {route.params?.title ?? "Game Title"}
        </Text>
        <Text style={globalStyles.titleText}>
          {route.params?.body ?? "Game Body"}
        </Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
