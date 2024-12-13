import { Alert } from "react-native";

/**
 * Show a dynamic alert with customizable title, message, and button text.
 *
 * @param title - Title of the alert
 * @param message - Message to display in the alert
 * @param buttonText - Text for the button (default: "Close")
 * @param onClose - Optional callback for button press
 */
export const ErrorAlert = (
  title: string,
  message: string,
  buttonText: string = "Close",
  onClose?: () => void
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: buttonText,
        onPress: onClose,
      },
    ],
    { cancelable: true }
  );
};
