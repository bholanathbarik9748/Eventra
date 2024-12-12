import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Hide overflowing shapes
  },
  glassContainer: {
    width: "80%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    alignItems: "center",
    backdropFilter: "blur(10px)", // Glass effect
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 4,
    textAlign: "center",
  },
  line: {
    width: 60,
    height: 4,
    backgroundColor: "#00C6FF",
    marginVertical: 10,
    borderRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    color: "#E3F2FD",
    fontStyle: "italic",
    opacity: 0.9,
    textAlign: "center",
  },
  circle1: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(0, 198, 255, 0.3)",
    top: -50,
    left: -50,
  },
  circle2: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    bottom: -80,
    right: -80,
  },
});
