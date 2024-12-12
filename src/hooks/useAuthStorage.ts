import * as SecureStore from "expo-secure-store";
import { useState } from "react";

export const useAuthStorage = () => {
  const [error, setError] = useState<string>("");

  // Save a key-value pair
  const saveValue = async (key: string, value: string): Promise<boolean> => {
    try {
      await SecureStore.setItemAsync(key, value);
      setError(""); // Clear any previous error
      return true;
    } catch (err) {
      handleError(err, "Failed to save value.");
      return false;
    }
  };

  // Retrieve a value by key
  const getValue = async (key: string): Promise<string | null> => {
    try {
      const response = await SecureStore.getItemAsync(key);
      setError(""); // Clear any previous error
      return response || null;
    } catch (err) {
      handleError(err, "Failed to retrieve value.");
      return null;
    }
  };

  // Delete a key-value pair
  const deleteValue = async (key: string): Promise<boolean> => {
    try {
      await SecureStore.deleteItemAsync(key);
      setError(""); // Clear any previous error
      return true;
    } catch (err) {
      handleError(err, "Failed to delete value.");
      return false;
    }
  };

  // Error handler
  const handleError = (err: unknown, defaultMessage: string) => {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError(defaultMessage);
    }
  };

  return { error, saveValue, getValue, deleteValue };
};
