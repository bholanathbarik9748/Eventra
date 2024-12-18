import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./Styles/styles";
import { useNavigation } from "@react-navigation/native";
import { useAuthStorage } from "@/src/hooks/UseAuthStorage";
import {
  HomeScreenNavigationProp,
  LoginScreenNavigationProp,
  ProfileScreenNavigationProp,
} from "@/app/RootStackParamType";
import { useFocusEffect } from "expo-router";
import { ErrorAlert } from "@/src/modules/ErrorAlert";
import { checkProfileStatus } from "@/src/Services/AuthServices";

const Splash = () => {
  // navigation
  const navigationController = useNavigation<
    | LoginScreenNavigationProp
    | HomeScreenNavigationProp
    | ProfileScreenNavigationProp
  >();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const { getValue } = useAuthStorage();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const getAuthToken = async (key: string) => {
    try {
      const token = await getValue(key);
      const userId = await getValue("userId");
      if (!token && !userId) {
        navigationController.navigate("Login");
      } else {
        try {
          const response = await checkProfileStatus(userId);
          response?.isProfile
            ? navigationController.navigate("Home")
            : navigationController.navigate("Profile", { id: userId });
        } catch (error: any) {
          ErrorAlert("Error", error?.data?.message[0], "Close");
        }
      }
    } catch (error: any) {
      ErrorAlert("Error", error?.data?.message[0], "Close");
    }
  };

  // Trigger logic when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      const timer = setTimeout(() => {
        getAuthToken("access_token");
      }, 2000);

      return () => clearTimeout(timer); // Cleanup timer on unfocus
    }, [])
  );

  return (
    <LinearGradient
      colors={["#141E30", "#243B55", "#78C6FF"]}
      style={styles.container}
    >
      {/* Floating Elements */}
      <View style={styles.circle1} />
      <View style={styles.circle2} />

      {/* Glassmorphism Container */}
      <Animated.View
        style={[
          styles.glassContainer,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Text style={styles.title}>Eventra</Text>
        <View style={styles.line} />
        <Text style={styles.subtitle}>Organize. Connect. Enjoy.</Text>
      </Animated.View>
    </LinearGradient>
  );
};

export default Splash;
