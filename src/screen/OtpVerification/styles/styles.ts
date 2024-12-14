import { color } from "@/src/utils/Constant";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.PrimaryColor,
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: color.TextPrimary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: color.TextSecondary,
    marginBottom: 30,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  otpInput: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: color.BorderColor,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
    color: color.TextPrimary,
    backgroundColor: color.SecondaryColor,
  },
  button: {
    backgroundColor: color.AccentColor,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: color.TextPrimary,
    fontSize: 18,
    fontWeight: "bold",
  },
  resendContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  resendText: {
    fontSize: 16,
    color: color.TextSecondary,
  },
  resendLink: {
    fontSize: 16,
    color: color.LightAccentColor,
    marginLeft: 5,
    fontWeight: "bold",
  },
  emailHighlight: {
    fontSize: 16,
    fontWeight: "bold",
    color: color.LightAccentColor, // A bright red or accent color for emphasis
    textAlign: "center",
  },
});
