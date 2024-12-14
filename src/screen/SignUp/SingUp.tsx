import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons"; // For the eye icon
import { color } from "@/src/utils/Constant";
import { styles } from "./Styles/styles";
import { authOtpRequestBody } from "@/src/Types/AuthTypes";
import { globalFormHandler } from "@/src/utils/FormHandler";
import { useNavigation } from "@react-navigation/native";
import {
  OtpScreenScreenNavigationProp,
  SignUpScreenNavigationProp,
} from "@/app/RootStackParamType";
import { sendAuthOtp } from "@/src/Services/AuthServices";
import { ErrorAlert } from "@/src/modules/ErrorAlert";

const SignUp = () => {
  const navigationController = useNavigation<
    SignUpScreenNavigationProp | OtpScreenScreenNavigationProp
  >();
  const [formData, setFormData] = useState<authOtpRequestBody>({
    email: "",
    password: "",
    role: "Attendee",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const submitHandler = async () => {
    setIsLoading(true);

    try {
      const response = await sendAuthOtp(formData?.email);
      if (response?.status === "success") {
        navigationController.navigate("OtpScreen", formData);
      }
    } catch (error: any) {
      ErrorAlert("Error", error?.data?.message[0], "Close");
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={color.TextSecondary}
        keyboardType="email-address"
        autoCapitalize="none"
        value={formData?.email}
        onChangeText={(text) => globalFormHandler("email", text, setFormData)}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor={color.TextSecondary}
          secureTextEntry={!isPasswordVisible}
          value={formData?.password}
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
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={formData?.role === "Organizer"}
          onValueChange={() => {
            setFormData((prev) => ({
              ...prev,
              role: formData?.role === "Organizer" ? "Attendee" : "Organizer",
            }));
          }}
          color={formData?.role === "Organizer" ? color.AccentColor : undefined}
        />
        <Text style={styles.checkboxText}>
          I am registering as an Event Organizer
        </Text>
      </View>

      <TouchableOpacity
        disabled={isLoading}
        style={styles.button}
        onPress={submitHandler}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Signing Up..." : "Sign Up"}
        </Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigationController.goBack()}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
