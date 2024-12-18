import { color } from "@/src/utils/Constant";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PrimaryColor,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: color.TextPrimary,
    textAlign: "center",
    marginBottom: 20,
  },
  imageContainer: {
    alignSelf: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: color.SecondaryColor,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
  },
  imagePlaceholder: {
    color: color.TextSecondary,
    fontSize: 14,
  },
  input: {
    height: 50,
    borderColor: color.BorderColor,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: color.SecondaryColor,
    color: color.TextPrimary,
  },
  dateText: {
    color: color.TextPrimary,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
    color: color.TextSecondary,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    color: color.TextPrimary,
    fontSize: 18,
    fontWeight: "bold",
  },
  autocompleteContainer: {
    marginBottom: 15,
    zIndex: 1000,
  },
  listView: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    maxHeight: 200,
  },
  inputText: { color: "#555" },
  closeButton: {
    backgroundColor: "#FF5733",
    padding: 10,
    alignItems: "center",
  },
  autocompleteInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },
});
