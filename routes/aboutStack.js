import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "green",
          height: 60,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="About GameZone" />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}

// export default createAppContainer(HomeStack);
export default AboutStack;
