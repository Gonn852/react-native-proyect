import React, {useContext, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthContext from "../../context/AuthContext";
import {user, userDetails} from "../../utils/userDB"

export default function LoginForm() {
  const [error, setError] = useState("");
  const {login, auth} = useContext(AuthContext);  const formik = useFormik({
    initialValues: initialValues, //valores iniciales del formulario
    validationSchema: Yup.object(validationSchema), //agrego Yup
    validateOnChange: false, //no me valide cada vez que cambio, sino el el Submit
    onSubmit: (formValue) => {
      setError("");
      const {username, password} = formValue;
      if((username !== user.username) || (password !== user.password)){
        setError("El usuario o la contraseña no coinciden")
      }
      else {
        login(userDetails)
      }
    },
  });
  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button title="Entrar" onPress={formik.handleSubmit} />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const initialValues = { username: "", password: "" };

const validationSchema = {
  username: Yup.string().required("El usuario es obligatorio"), //el username debe ser string y es obligatorio. Puedo anidar mas validaciones
  password: Yup.string().required("La contraseña es obligatoria"),
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
