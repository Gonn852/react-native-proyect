import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteNavigation from "./FavoriteNavigation";
import MainNavigation from "./MainNavigation";
import AccountNavigation from "./AccountNavigation";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

const renderImageAdvengers = () => (
  <Image
    source={require("../assets/logo.png")}
    style={{ height: 75, width: 75, top: -15 }}
  />
);

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: (color, size) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Main"
        component={MainNavigation}
        options={{ tabBarLabel: "", tabBarIcon: () => renderImageAdvengers() }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: (color, size) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
