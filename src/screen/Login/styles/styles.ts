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
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: color.BorderColor,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    color: color.TextPrimary,
    backgroundColor: color.SecondaryColor,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderColor: color.BorderColor,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: color.SecondaryColor,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: color.TextPrimary,
  },
  button: {
    backgroundColor: color.AccentColor,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: color.TextPrimary,
    fontSize: 18,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: color.TextSecondary,
  },
  signupLink: {
    fontSize: 16,
    color: color.LightAccentColor,
    marginLeft: 5,
    fontWeight: "bold",
  },
  VisibleIcon: {
    marginRight: 10,
  },
});
