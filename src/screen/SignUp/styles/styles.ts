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
  loginContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: color.TextSecondary,
  },
  loginLink: {
    fontSize: 16,
    color: color.LightAccentColor,
    marginLeft: 5,
    fontWeight: "bold",
  },
  VisibleIcon: {
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#ffffff",
  },
});
