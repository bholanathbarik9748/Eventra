import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./Styles/styles";
import { useNavigation } from "@react-navigation/native";
import { useAuthStorage } from "@/src/hooks/useAuthStorage";

const Splash = () => {
  const nav = useNavigation();
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
      if (!token) {
        nav.navigate("Login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  setTimeout(() => {
    getAuthToken("access_token");
  }, 3000);

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
