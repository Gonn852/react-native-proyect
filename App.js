import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import AuthContext from "./src/context/AuthContext";
import useAuth from './src/hooks/useAuth';

export default function App() {
  const initialState = useAuth();
  return (
    <NavigationContainer>
      <AuthContext.Provider value={initialState}>
        <Navigation />
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
