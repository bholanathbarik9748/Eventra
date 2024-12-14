import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Styles/styles";
import { SignUpBody } from "@/src/Types/AuthTypes";
import { ErrorAlert } from "@/src/modules/ErrorAlert";
import { sendAuthOtp, signUpUser } from "@/src/Services/AuthServices";
import { useNavigation } from "@react-navigation/native";
import { ProfileSetupScreenNavigationProp } from "@/app/RootStackParamType";
import { useAuthStorage } from "@/src/hooks/UseAuthStorage";

const OtpScreen: React.FC<any> = ({ route }) => {
  const navigationController =
    useNavigation<ProfileSetupScreenNavigationProp>();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(TextInput | null)[]>([]);
  const { email, password, role } = route.params;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { saveValue } = useAuthStorage();

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // If value entered, focus next input
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
    setOtp(newOtp);
  };

  const handleBackspace = (value: string, index: number) => {
    // If backspace pressed, move focus to previous input
    if (value === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const reqBody: SignUpBody = { email, password, role, otp: otp.join("") };
    try {
      const response = await signUpUser(reqBody);
      if (response?.status === "success") {
        await saveValue("access_token", response?.data?.access_token);
        await saveValue("userId", response?.data?.userId);
        await saveValue("role", response?.data?.role);
        navigationController.navigate("ProfileSetup", {
          id: response?.data?.role,
        });
      }
    } catch (error: any) {
      ErrorAlert("Error", error?.data?.message[0], "Close");
    }
    setIsLoading(false);
  };

  const resendOtp = async () => {
    try {
      const response = await sendAuthOtp(email);
      if (response?.status === "success") {
        ErrorAlert("Success", "OTP has been resent successfully.", "Close");
      }
    } catch (error: any) {
      ErrorAlert("Error", error?.data?.message[0], "Close");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>
        A 6-digit code has been sent to {"\n"}
        <Text style={styles.emailHighlight}>{email}</Text>
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)} // Store refs
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleOtpChange(text, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                handleBackspace(value, index);
              }
            }}
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Verifying..." : "Verify"}
        </Text>
      </TouchableOpacity>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't receive the OTP?</Text>
        <TouchableOpacity onPress={resendOtp}>
          <Text style={styles.resendLink}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpScreen;
