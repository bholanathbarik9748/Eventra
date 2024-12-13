import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { color } from "@/src/utils/Constant";
import { styles } from "./Styles/styles";
import { loginBody } from "./Types/Types";
import { globalFormHandler } from "@/src/utils/FormHandler";

const Login = () => {
  const [formData, setFormData] = useState<loginBody>();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const submitHandler = () => {
    console.log("formData", formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={color.TextSecondary}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => globalFormHandler("email", text, setFormData)}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor={color.TextSecondary}
          secureTextEntry={!isPasswordVisible}
          onChangeText={(text) =>
            globalFormHandler("password", text, setFormData)
          }
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.VisibleIcon}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color={color.TextSecondary}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={submitHandler}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
