import { apiClient } from "@/src/utils/Api";
import { loginBody, SignUpBody } from "../Types/AuthTypes";

export const loginUser = async (data: loginBody): Promise<any> => {
  try {
    const response = await apiClient.post("/login", data);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const sendAuthOtp = async (email: string): Promise<any> => {
  let reqBody = {
    email,
  };

  try {
    const response = await apiClient.post("/otp-request", reqBody);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const signUpUser = async (body: SignUpBody): Promise<any> => {
  try {
    const response = await apiClient.post("/sign-up", body);
    return response?.data;
  } catch (error) {
    throw error;
  }
};
