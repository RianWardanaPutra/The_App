import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

export default function ReviewDetails({ route }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>
        {route.params?.title ?? "Game Title"}
      </Text>
      <Text style={globalStyles.titleText}>
        {route.params?.body ?? "Game Body"}
      </Text>
      <Text style={globalStyles.titleText}>
        {route.params?.rating ?? "Game Rating"}
      </Text>
    </View>
  );
}
