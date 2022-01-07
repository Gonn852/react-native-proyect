import React, {useContext} from "react";
import { View, Text } from "react-native";
import UserData from "../components/Auth/UserData";
import LoginForm from "../components/Auth/LoginForm";
import AuthContext from "../context/AuthContext";

export default function Account() {
  const {auth} = useContext(AuthContext);
  console.log(auth)

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
