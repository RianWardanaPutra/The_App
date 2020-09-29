import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";

function RootDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="AboutStack"
        component={AboutStack}
        options={{ title: "About" }}
      />
    </Drawer.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default RootDrawerNavigator;
