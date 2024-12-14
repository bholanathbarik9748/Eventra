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
import { loginBody } from "../../Types/AuthTypes";
import { globalFormHandler } from "@/src/utils/FormHandler";
import { useNavigation } from "@react-navigation/native";
import {
  HomeScreenNavigationProp,
  SignUpScreenNavigationProp,
} from "@/app/RootStackParamType";

// Custom component
import { ErrorAlert } from "@/src/modules/ErrorAlert";

// import services
import { loginUser } from "@/src/Services/AuthServices";
import { useAuthStorage } from "@/src/hooks/UseAuthStorage";

const Login = () => {
  const navigationController = useNavigation<HomeScreenNavigationProp | SignUpScreenNavigationProp>();

  const { saveValue } = useAuthStorage();

  // Local States
  const [formData, setFormData] = useState<loginBody>({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const submitHandler = async () => {
    setIsLoading(true);
    try {
      const response = await loginUser(formData);
      debugger
      if (response?.status === "success") {
        await saveValue("access_token", response?.data?.access_token);
        await saveValue("userId", response?.data?.userId);
        await saveValue("role", response?.data?.role);
        navigationController.navigate("Home");
      }
    } catch (error: any) {
      ErrorAlert("Error", error?.data?.message[0], "Close");
    }
    setIsLoading(false);
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

      <TouchableOpacity
        disabled={isLoading}
        style={styles.button}
        onPress={submitHandler}
      >
        <Text style={styles.buttonText}>
          {!isLoading ? "Login" : "Logging in..."}
        </Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => navigationController.navigate("SignUp")}
        >
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
